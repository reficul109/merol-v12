module.exports = {
	name: 'delmod',
  use: 'delmod <userID>',
  args: 1,
  lock: 2,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (!db.prepare('SELECT userID FROM mods WHERE userID = ?').get(message.args[1])) {return message.react("❌")}
    client.delRow = db.prepare('DELETE FROM mods WHERE userID = ?')
    client.delRow.run(message.args[1])}}