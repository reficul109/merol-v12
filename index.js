//Packages
const http = require('http'), express = require('express'), app = express(), fs = require('fs'), Discord = require('discord.js'), getColors = require('get-image-colors')
const a = require('./tools/arrays.json'), f = require('./tools/funcs.js'), v = require('./tools/vars.json')
const client = new Discord.Client({presence: {status: 'online', activity: {name: f.randomObj(a.games)}}, disableMentions: 'everyone'})

//Page
var port = (proccess.env.PORT || 0)
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile('./public/index.html'))
app.listen(port, () => console.log('Listening at port ' + port))
setInterval(() => {
  http.get("https://merol-v12.herokuapp.com/")}, 280000)

//Data Base
const db = require('better-sqlite3')('./assets/data.db')
client.userDB = db.prepare("SELECT * FROM userData WHERE userID = ?")
client.srvrDB = db.prepare("SELECT * FROM srvrData WHERE serverID = ?")
client.modDB = db.prepare("SELECT * FROM mods WHERE userID = ?")
client.cKeys = db.prepare("UPDATE userData SET keys = ? WHERE userID = ?")

//Command Getter
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)}

//Ready
client.once('ready', () => {
  var jsonContent = '{"nUsers": "' + client.users.cache.size + '", "nServers": "' + client.guilds.cache.size + '", "currIcon": "' + client.user.avatarURL({format: 'png', dynamic: true}) +'", "modPass": "' + v.modPass +'"}'
  fs.writeFile("./public/generalD.json", jsonContent, 'utf8', (err) => {})
  console.log('Booted Up!')})

//Avys
client.on('userUpdate', (oldUser, newUser) => {
  newUser.DB = client.modDB.get(newUser.id)
  if (oldUser.avatarURL() !== newUser.avatarURL() && newUser.DB && newUser.DB.mimicRole === 'Y') {
    getColors(newUser.displayAvatarURL({format: 'png', dynamic: true})).then(colors => {
    client.channels.cache.get("426520047301951509").send('<@' + newUser.id + '>, choose a color! [Reply "1", "2", etc...]\nhttps://encycolorpedia.com/' + colors[0].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[1].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[2].toString().substring(1))
    const collector = new Discord.MessageCollector(client.channels.cache.get("426520047301951509"), m => m.author.id === newUser.id, {time: 600000})
    collector.on('collect', cMessage => {
      var numb = parseInt(cMessage.content)
      if (numb) {cMessage.member.roles.color.setColor(colors[--numb].toString())}
      collector.stop()
      cMessage.react("440574288160882688")})})}})

//Guild Join
client.on('guildCreate', guild => {
  if (!guild.available) return;
  var embed = new Discord.MessageEmbed()
  embed.setColor(v.corrColor)
  embed.addField('Joined **``ID:' + guild.id + '`` **-** ' + guild.name + '** [' + guild.memberCount + ' Users]', '(Owned by ``ID:' + guild.owner.id + '`` - ' + client.users.cache.get(guild.owner.id).tag + ')')
  client.channels.cache.get(v.logChann).send(embed)})

//Guild Left
client.on('guildDelete', guild => {
  if (!guild.available) return;
  var embed = new Discord.MessageEmbed()
  embed.setColor(v.wrngColor)
  embed.addField('Left **``ID:' + guild.id + '`` **-** ' + guild.name + '**', '_ _')
  client.channels.cache.get(v.logChann).send(embed)})

//Messages
client.on('message', message => {

  //Shorcuts
  var origin = message.channel, caller = message.author

  //Only Users
  if (caller.bot || message.system) return;

  //New User Catcher
  if (!client.userDB.get(caller.id)) {
    client.newRow = db.prepare("INSERT INTO userData (userID, getKeys, keys, udexText, udexImg, getReact, customReact, blockDM) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
    client.newRow.run(caller.id, 'Y', 0, 'None', 'None', 'Y', 'None', 'N')}
  caller.DB = client.userDB.get(caller.id)

  //Message Attachments
  if (message.attachments.size) {var msgAtt = Array.from(message.attachments.values(), x => x.url)}

  //DM Dump Collector
  if (!message.guild) {
    if (caller.DB.blockDM === 'N') {client.channels.cache.get("445068696310906901").send('``' + caller.id + '`` - ' + caller.tag + " dm'ed: " + message.content, {files: msgAtt})}
    else {message.react('❌')}}
   
  else {

    //New Server Catcher
    if (!client.srvrDB.get(message.guild.id)) {
      client.newRow = db.prepare("INSERT INTO srvrData (serverID, keysEnabled, customRole, callChann) VALUES (?, ?, ?, ?)")
      client.newRow.run(message.guild.id, 'Y', 'None', 'None')}
    message.guild.DB = client.srvrDB.get(message.guild.id)

    //Lucky Keys
    if (v.keyIDs.some(word => message.id.endsWith(word))) {
      return;
      if (caller.DB.getKeys === 'Y' && message.guild.DB.keysEnabled === 'Y') {
        var keysGot = f.randomObj(v.keyChances)
        caller.DB.keys+= keysGot
        client.cKeys.run(caller.DB.keys, caller.id)
        caller.send('<a:lucky:541345931870732290> | You found **' + keysGot + '** lucky key(s)! **(Total: ' + caller.DB.keys + ')** - **Now using V12!**').catch(() => console.log(caller.id + ' Probably blocked the bot'))
      message.react("541345931870732290")}}

    //Reacts
    if (message.id.endsWith("0")) {
      if (caller.DB.getReact === 'Y' && caller.DB.customReact !== 'None') {message.react(caller.DB.customReact).catch(() => console.log(caller.id + ' Has a broken reaction'))}}

    //Wiki 
    if (message.guild === client.guilds.cache.get("396184349101260800")) {
      
      //Birthday
      if (message.member.roles.cache.find(role => role.id === "445996236890439680")) {message.react('🎉')}

      //Art
      if (origin.parentID === "430744121297207296")  {
      
        //Hearts
        if (msgAtt) {message.react(f.randomObj(a.hearts))}

        //Quote
        if (message.content.startsWith("https://discord")) {
          var parts = message.content.split('/'), artEmbed = new Discord.MessageEmbed()
          message.delete()
          client.channels.cache.get(parts[5]).messages.fetch(parts[6]).then(nMessage => {
            artEmbed.addField(nMessage.content, '[Jump to message](' + message.content + ')')
            artEmbed.setImage((Array.from(nMessage.attachments.values(), x => x.url)[0] || nMessage.content))
            artEmbed.setFooter('To make a message like this one, check the pins!')
            artEmbed.setColor(v.corrColor)
            origin.send(artEmbed)})}}}}

  //Non-Prefix Ignore
  if (!message.content.toLowerCase().startsWith(v.prefix)) return;

  //Arguments
	message.args = message.content.slice(v.prefix.length).split(' ')
  var commName = message.args[0].toLowerCase()

  //Command Detector
  const command = client.commands.get(commName) || client.commands.find(command => command.alias && command.alias.includes(commName));
  if (!command) return;

  //Keys Required
  if (command.keyreq && command.keyreq > caller.DB.keys) {return origin.send('You dont have enough keys...')}

  //Args Related
  if (command.args) {

    //Argresult
    message.argresult = message.args.slice(command.args).join(' ')

    //Attachments Replace Arguments (ARA)
    if (!message.args[command.args] && command.ARA && msgAtt) {command.args--}

    //Arguments Required
    if (!message.args[command.args]) {return origin.send('Correct usage is "' + v.prefix + command.use + '"!')}  }

  //Image Required
  if (command.imgreq && !msgAtt) {return origin.send('This command requires an image attached.')}

  //Guilds Only
  if (command.guild && !message.guild) {return origin.send("Can't use this here... (To see what you can do on DMs check the help page)")}

  //Guild Admins Only
  if (command.admin && !message.member.hasPermission('ADMINISTRATOR')) {return message.react('❌')}

  //Mod Lock
  if (command.lock && !client.guilds.cache.get(v.srvrID).member(caller).roles.cache.find(role => role.id === v.modsID[command.lock])) {return message.react('❌')}

  try {

    //Embeds
    var embed = new Discord.MessageEmbed(), embed2 = new Discord.MessageEmbed()

    //Use Command
    command.execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v)

    //React When Done
    if (command.thumbs) {message.react("440574288160882688")}

  } catch (error) {
    console.log('Trigger: ' + message.content + ' | ' + error)
	  message.react("541339209986998277")}})

//Token
client.login(process.env.TOKEN)
