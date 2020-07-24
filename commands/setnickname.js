module.exports = {
	name: 'setnickname',
  use: 'setnickname <guildID> <text>',
  alias: ['sn'],
  args: 2,
  lock: 1,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.guilds.cache.get(message.args[1]).me.setNickname(message.argresult)}}