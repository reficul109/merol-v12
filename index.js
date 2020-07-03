const http = require('http')
const express = require('express')
const app = express()
const fs = require('fs')
var port = 3000

//Page
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Listening at port ' + port))
setInterval(() => {
  http.get('http://merol-v12--reficul109.repl.co')}, 280000)

//Bot
const Discord = require('discord.js')
const a = require('./tools/arrays.json'), f = require('./tools/funcs.js'), v = require('./tools/vars.json')
const client = new Discord.Client({presence: {status: 'online', activity: {name: f.randomObj(a.games)}}, disableMentions:'everyone'})
const db = require('better-sqlite3')('./assets/data.db')

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

  //Only Users
  if (message.author.bot || message.system) return;

  //New User Catcher
  if (!db.prepare('SELECT userID FROM userData WHERE userID = ?').get(message.author.id)) {
    client.newRow = db.prepare('INSERT INTO userData (userID, getKeys, keys, udexText, udexImg, getReact, customReact, blockDM) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    client.newRow.run(message.author.id, 'Y', 0, 'None', 'None', 'Y', 'None', 'N')}

  //Message Attachments
  if (message.attachments.size) {var msgAtt = Array.from(message.attachments.values(), x => x.url)}

  //DM Dump Collector
  if (!message.guild) {
    client.channels.cache.get("445068696310906901").send('``' + message.author.id + '`` - ' + message.author.tag + " dm'ed: test " + message.content, {files: msgAtt})}

  else {

    //New Server Catcher
    if (!db.prepare('SELECT serverID FROM srvrData WHERE serverID = ?').get(message.guild.id)) {
      client.newRow = db.prepare('INSERT INTO srvrData (serverID, keysEnabled, customRole, callChann) VALUES (?, ?, ?, ?)')
      client.newRow.run(message.guild.id, 'Y', 'None', 'None')}
 
  }

  //Non-Prefix Ignore
  if (!message.content.toLowerCase().startsWith(v.prefix)) return;

  //Arguments
	const args = message.content.slice(v.prefix.length).split(' ')
  var commName = args[0].toLowerCase()

  //Embeds
  var embed = new Discord.MessageEmbed(), embed2 = new Discord.MessageEmbed() 

  //Command Detector
  if (!client.commands.has(commName)) return;
  const command = client.commands.get(commName)

  //Attachments Replace Arguments (ARA)
  if (!args[command.args] && command.ARA && msgAtt && msgAtt[0]) {command.args--}

  //Arguments Required
  if (!args[command.args]) {return message.channel.send('Correct usage is "' + v.prefix + command.use + '"!')}

  //Image Required
  if (command.imgreq && !msgAtt) {return message.channel.send('This command requires an image attached')}

  //Guilds Only
  if (command.guild && !message.guild) {return message.channel.send("Can't use this here... (To see what you can do on DMs check the help page)")}

  //Guild Admins Only
  if (command.admin && !message.member.hasPermission('ADMINISTRATOR')) {return message.react('❌')}

  //Mod Lock
  if (command.lock && !client.guilds.cache.get(v.srvrID).member(message.author.id).roles.cache.find(role => role.id === v.modsID[command.lock])) {return message.react('❌')}

  try {

    //Use Command
    command.execute(client, message, args, msgAtt, embed, embed2, db, a, f, v)

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