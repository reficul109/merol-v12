module.exports = {
	name: 'clearnicknames',
  alias: ['cn'],
  lock: 2,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.guilds.cache.forEach(guild => {guild.me.setNickname(null)})}}