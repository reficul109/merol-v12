const http = require('http')
const express = require('express')
const Discord = require('discord.js')
const client = new Discord.Client()

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(${{secrets.PORT}}, () => console.log('Listening!'));


//Ready
client.on('ready', () => {
  console.log('Booted Up!')}
  
//Token.
client.login(${{secrets.TOKEN}})
