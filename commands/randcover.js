module.exports = {
  name: 'randcover',
  alias: ['rc'],
  args: 0,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const ytpl = require('yt-playlist-scraper')
    ytpl("PLA6VJbQ4uzl3eZH93ZwrFqpCF7SSphXGA").then(playListData => {
    origin.send('Selected song: https://www.youtube.com/watch?v=' + f.randomObj(playListData.videos).id)})}}