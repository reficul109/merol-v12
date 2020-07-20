module.exports = {
	name: 'getkeys',
  args: 0,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.cwKeys = db.prepare("UPDATE userData SET getKeys = ? WHERE userID = ?")
    if (caller.DB.getKeys === 'Y') {
      client.cwKeys.run('N', caller.id)
      origin.send('Keys disabled.')}
    else {
      client.cwKeys.run('Y', caller.id)
      origin.send('Keys enabled.')}}}