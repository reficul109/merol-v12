module.exports = {
	name: 'setusername',
  use: 'setusername <text>',
  alias: ['setname', 'su'],
  args: 1,
  lock: 2,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.user.setUsername(message.argresult)}}