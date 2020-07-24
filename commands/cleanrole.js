module.exports = {
	name: 'cleanrole',
  alias: ['cr'],
  args: 1,
  lock: 2,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    message.guild.roles.cache.find(role => role.name.toLowerCase() === message.argresult.toLowerCase()).setPermissions(0)}}