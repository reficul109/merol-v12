module.exports = {
	name: 'blockdms',
  alias: ['b'],
  args: 0,
  lock: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var user = client.users.cache.get(message.args[1])
    user.DB = db.prepare("SELECT * FROM userData WHERE userID = ?").get(user.id)
    client.cBlock = db.prepare("UPDATE userData SET blockDM = ? WHERE userID = ?")
    if (user.DB.blockDM === 'N') {
      client.cBlock.run('Y', user.id)
      origin.send('User blocked.')}
    else {
      client.cBlock.run('N', user.id)
      origin.send('User unblocked.')}}}