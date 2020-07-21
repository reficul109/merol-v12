module.exports = {
  name: 'leave',
  args: 0,
  guild: true,
  	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (message.member.voice.channel) {vcChann.leave()}}}