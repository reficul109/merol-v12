module.exports = {
	name: 'setnickname',
  use: 'setnickname <guildID> <text>',
  alias: ['sn'],
  args: 2,
  lock: 1,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var guild = client.guilds.cache.get(message.args[1])
    if (!guild) {return message.react('❌')}
    guild.me.setNickname(message.argresult)}}