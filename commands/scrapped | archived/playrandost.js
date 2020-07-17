module.exports = {
  name: 'playrandost',
  args: 0,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var vcChann = message.member.voice.channel
    if (!vcChann) {return origin.send('You are not in a voice channel')}
    vcChann.join().catch(() => origin.send('I cannot join...')).then(connection => {
    const fs = require('fs')
    var song = f.randomObj(fs.readdirSync('./assets/ost/'))
    const dispatcher = connection.play(song)
    origin.send(f.randomObj(v.songFl) + song + '\n(Use the command again to switch song | Stop with "' + v.prefix + 'leave")')
    dispatcher.on('end', end => {vcChann.leave()})})}}