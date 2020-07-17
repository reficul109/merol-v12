module.exports = {
  name: 'join',
  args: 0,
  guild: true,
  	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var vcChann = message.member.voice.channel
    if (vcChann) {vcChann.join()}}}