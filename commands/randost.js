module.exports = {
  name: 'randost',
  alias: ['ro'],
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const fs = require('fs')
    var song = f.randomObj(fs.readdirSync('./assets/ost/'))
    origin.send('Selected song: ' + song + '!', {files: ['./assets/ost/' + song]})}}