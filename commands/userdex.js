module.exports = {
	name: 'userdex',
  use: 'userdex <text>',
  alias: ['ud'],
  args: 1,
  keyreq: 20,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')   
    if (argresult1.length > 500) {return  origin.send('(Do you really need so many letters for this?)')}
    client.cUserdex = db.prepare("UPDATE userData SET udexText = ? WHERE userID = ?")
    client.cUserdex.run(argresult1, caller.id)
    client.cKeys.run(--caller.DB.keys, caller.id)}}