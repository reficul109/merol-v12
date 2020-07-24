module.exports = {
	name: 'setgame',
  use: 'setgame <"PLAYING" / "WATCHING" / "LISTENING"> <text>',
  alias: ['sg'],
  args: 2,
  lock: 1,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
	  client.user.setActivity(message.argresult + ' | ' + v.prefix + 'help', {type: message.args[1].toUpperCase()})}}