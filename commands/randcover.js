module.exports = {
  name: 'randcover',
  args: 0,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const ytlist = require('youtube-playlist')
    ytlist('https://www.youtube.com/playlist?list=PLA6VJbQ4uzl3eZH93ZwrFqpCF7SSphXGA', 'url').then(res => {
    origin.send('Selected song: ' + f.randomObj(res.data.playlist))})}}