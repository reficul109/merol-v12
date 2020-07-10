module.exports = {
  name: 'randost',
  args: 0,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const fs = require('fs')
    song = f.randomObj(fs.readdirSync('./assets/ost/'))
    origin.send('Selected song: ' + song + '!', {files: ['./assets/ost/' + song]})}}