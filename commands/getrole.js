module.exports = {
	name: 'getrole',
  alias: ['gro'],
  args: 0,
  keyreq: 10,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var roles = message.member.roles, customRole = message.guild.DB.customRole
    if (customRole === 'None') {return origin.send('This server has no custom role...')}
    if (!roles.cache.find(role => role.id === customRole)) {
      roles.add(customRole).catch(() => origin.send('There must me a problem with the permissions...'))
      origin.send('Role given.')}
    else {
      roles.remove(customRole).catch(() => origin.send('There must me a problem with the permissions...'))
      origin.send('Role taken.')}}}