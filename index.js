//Packages
const http = require('http')
const express = require('express')
const app = express()
const fs = require('fs')

//Page
var port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Listening at port ' + port))
setInterval(() => {
  http.get('http://merol-v12--reficul109.repl.co')}, 280000)

//Bot
const Discord = require('discord.js')
const a = require('./tools/arrays.json'), f = require('./tools/funcs.js'), v = require('./tools/vars.json')
const client = new Discord.Client({presence: {status: 'online', activity: {name: f.randomObj(a.games)}}, disableMentions:'everyone'})

//Data Base
const db = require('better-sqlite3')('./assets/data.db')
client.userDB = db.prepare('SELECT * FROM userData WHERE userID = ?')
client.srvrDB = db.prepare('SELECT * FROM srvrData WHERE serverID = ?')
client.cKeys = db.prepare("UPDATE userData SET keys = ? WHERE userID = ?")

//Command Getter
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)}

//Ready
client.once('ready', () => {
  console.log('Booted Up!')})

//Guild Join.
client.on('guildCreate', guild => {
  if (guild.available) {
    var embed = new Discord.MessageEmbed()
    embed.setColor(v.corrColor)
    embed.addField('Joined **``ID:' + guild.id + '`` **-** ' + guild.name + '** [' + guild.memberCount + ' Users]', '(Owned by ``ID:' + guild.owner.id + '`` - ' + client.users.cache.get(guild.owner.id).tag + ')')
    client.channels.cache.get("565649417391046674").send(embed)}})

//Guild Left.
client.on('guildDelete', guild => {
  if (guild.available) {
    var embed = new Discord.MessageEmbed()
    embed.setColor(v.wrngColor)
    embed.addField('Left **``ID:' + guild.id + '`` **-** ' + guild.name + '**', '_ _')
    client.channels.cache.get("565649417391046674").send(embed)}})

//Messages
client.on('message', message => {

  //Shorcuts
  var origin = message.channel, caller = message.author

  //Only Users
  if (caller.bot || message.system) return;

  //New User Catcher
  if (!client.userDB.get(caller.id)) {
    client.newRow = db.prepare('INSERT INTO userData (userID, getKeys, keys, udexText, udexImg, getReact, customReact, blockDM) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    client.newRow.run(caller.id, 'Y', 0, 'None', 'None', 'Y', 'None', 'N')}
  caller.DB = client.userDB.get(caller.id)

  //Message Attachments
  if (message.attachments.size) {var msgAtt = Array.from(message.attachments.values(), x => x.url)}

  //DM Dump Collector
  if (!message.guild) {
    if (caller.DB.blockDM === 'Y') {return message.react('❌')}
    client.channels.cache.get("445068696310906901").send('``' + caller.id + '`` - ' + caller.tag + " dm'ed: test " + message.content, {files: msgAtt})}

  else {

    //New Server Catcher
    if (!client.srvrDB.get(message.guild.id)) {
      client.newRow = db.prepare('INSERT INTO srvrData (serverID, keysEnabled, customRole, callChann) VALUES (?, ?, ?, ?)')
      client.newRow.run(message.guild.id, 'Y', 'None', 'None')}
    message.guild.DB = client.srvrDB.get(message.guild.id)

    //Lucky Keys
    if (v.keyIDs.some(word => message.id.endsWith(word))) {
      if (caller.DB.getKeys === 'Y' && message.guild.DB.keysEnabled === 'Y') {
        var keysGot = f.randomObj(v.keyChances)
        caller.DB.keys+= parseInt(keysGot)
        caller.send('<a:lucky:541345931870732290> | You found **' + keysGot + '** lucky key(s)! **(Total: ' + caller.DB.keys + ')** - **Now using V12! and Repl.it!**').catch()
        client.cKeys.run(caller.DB.keys, caller.id)
      message.react("541345931870732290")}}

    //Wiki bd
    //if (message.guild === client.guilds.cache.get("396184349101260800") && message.member.roles.cache.find(role => role.id === "445996236890439680")) {
    //  message.react('🎉')}

    //Art Quote
    if (message.content.startsWith('https://discord.com/channels/412116759668064256/')) {
      var parts = message.content.split('/')
      message.delete()
      client.channels.cache.get(parts[5]).messages.fetch(parts[6]).then(message => origin.send(message.content, {files: Array.from(message.attachments.values(), x => x.url)}))}

  }

  //Non-Prefix Ignore
  if (!message.content.toLowerCase().startsWith(v.prefix)) return;

  //Arguments
	message.args = message.content.slice(v.prefix.length).split(' ')
  var commName = message.args[0].toLowerCase()

  //Embeds
  var embed = new Discord.MessageEmbed(), embed2 = new Discord.MessageEmbed() 

  //Command Detector
  if (!client.commands.has(commName)) return;
  const command = client.commands.get(commName)

  //Keys Required
  if (command.keyreq && command.keyreq > caller.DB.keys) {return origin.send('You dont have enough keys...')}

  //Args Related
  if (command.args) {

    //Attachments Replace Arguments (ARA)
    if (!message.args[command.args] && command.ARA && msgAtt && msgAtt[0]) {command.args--}

    //Arguments Required
    if (!message.args[command.args]) {return origin.send('Correct usage is "' + v.prefix + command.use + '"!')}

  }

  //Image Required
  if (command.imgreq && !msgAtt) {return origin.send('This command requires an image attached')}

  //Guilds Only
  if (command.guild && !message.guild) {return origin.send("Can't use this here... (To see what you can do on DMs check the help page)")}

  //Guild Admins Only
  if (command.admin && !message.member.hasPermission('ADMINISTRATOR')) {return message.react('❌')}

  //Mod Lock
  if (command.lock && !client.guilds.cache.get(v.srvrID).member(caller.id).roles.cache.find(role => role.id === v.modsID[command.lock])) {return message.react('❌')}

  try {

    //Use Command
    command.execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v)

    //React When Done
    if (command.thumbs) {
      message.react("440574288160882688")}

  } catch (error) {
    console.error(error)
	  message.react("541339209986998277")
  }
  
})

//Token
client.login(process.env.TOKEN)