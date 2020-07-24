module.exports = {
	name: 'setavatar',
  alias: ['sa'],
  imgreq: true,
  lock: 2,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.user.setAvatar(msgAtt[0])}}