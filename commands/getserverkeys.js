module.exports = {
	name: 'getserverkeys',
  alias: ['gsk'],
  args: 0,
  guild: true,
  admin: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.cwKeys = db.prepare("UPDATE srvrData SET keysEnabled = ? WHERE serverID = ?")
    if (message.guild.DB.keysEnabled === 'Y') {
      client.cwKeys.run('N', message.guild.id)
      origin.send('Keys disabled for this server.')}
    else {
      client.cwKeys.run('Y', message.guild.id)
      origin.send('Keys enabled for this server.')}}}