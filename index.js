const Discord = require('discord.js')
const client = new Discord.Client()

//Ready
client.on('ready', () => {
  console.log('Booted Up!')}
  
//Token.
client.login(process.env.TOKEN)
