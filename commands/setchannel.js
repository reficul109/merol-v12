module.exports = {
	name: 'setchannel',
  use: 'setchannel <channelMention / "None">',
  alias: ['sc'],
  args: 1,
  guild: true,
  admin: true,
  thumbs: true,
  execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.cRole = db.prepare("UPDATE srvrData SET callChann = ? WHERE serverID = ?")
    if (message.mentions.channels.size) {client.cRole.run(message.mentions.channels.first().id, message.guild.id)}
    else if (message.argresult.toLowerCase().includes('none')) {client.cRole.run('None', message.guild.id)}
    else {origin.send('You need to mention a channel or simply use "None"')}}}