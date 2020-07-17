module.exports = {
  name: 'playrandcover',
  args: 0,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var vcChann = message.member.voice.channel
    if (!vcChann) {return origin.send('You are not in a voice channel')}
    vcChann.join().catch(() => origin.send('I cannot join...')).then(connection => {
    const ytpl = require("yt-playlist-scraper")
    const ytdl = require('ytdl-core')
    ytpl("PLA6VJbQ4uzl3eZH93ZwrFqpCF7SSphXGA").then(playListData => {
    var vid = "https://www.youtube.com/watch?v=" + f.randomObj(playListData.videos).id
    const dispatcher = connection.play(ytdl(vid, {filter: 'audioonly'}))
    origin.send(f.randomObj(v.songFl) + vid + '\n(Use the command again to switch song | Stop with "' + v.prefix + 'leave")')
    dispatcher.on('end', end => {vcChann.leave()})})})}}