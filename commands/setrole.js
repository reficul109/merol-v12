module.exports = {
	name: 'setrole',
  use: 'setrole <roleMention / "None">',
  alias: ['sr'],
  args: 1,
  guild: true,
  admin: true,
  thumbs: true,
  execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.cRole = db.prepare("UPDATE srvrData SET customRole = ? WHERE serverID = ?")
    if (message.mentions.roles.size) {client.cRole.run(message.mentions.roles.first().id, message.guild.id)}
    else if (message.argresult.toLowerCase().includes('none')) {client.cRole.run('None', message.guild.id)}
    else {origin.send('You need to mention a role or simply use "None"')}}}