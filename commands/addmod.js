module.exports = {
	name: 'addmod',
  use: 'addmod <userID> <mimicRole ["Y" / "N"]> <modNick>',
  args: 3,
  lock: 2,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var user = client.users.cache.get(message.args[1])
    if (!user) {return message.react('❌')}
    client.newRow = db.prepare('INSERT INTO mods (userID, mimicRole, modNick) VALUES (?, ?, ?)')
    client.newRow.run(user.id, message.args[2].toUpperCase(), message.argresult)}}