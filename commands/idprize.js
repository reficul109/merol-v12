module.exports = {
	name: 'idkeygiveaway',
  use: 'idkeygiveaway <userID> <number>',
  alias: ['idp'],
  args: 2,
  lock: 2,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var user = client.users.cache.get(message.args[1]), keysGot = parseInt(message.args[2])
    if (!user || !keysGot) {return message.react('❌')}
    user.DB = db.prepare("SELECT * FROM userData WHERE userID = ?").get(user.id)
    user.DB.keys+= keysGot
    client.cKeys.run(user.DB.keys, user.id)
    user.send('<a:lucky:541345931870732290> | You were given **' + keysGot + '** lucky key(s)! **(Total: ' + user.DB.keys + ')**.').catch(() => console.log(user.id + ' Probably blocked the bot'))}}