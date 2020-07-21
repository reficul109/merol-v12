module.exports = {
	name: 'userdex',
  use: 'userdex <text>',
  alias: ['ud'],
  args: 1,
  keyreq: 20,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (message.argresult.length > 500) {return  origin.send('(Do you really need so many letters for this?)')}
    client.cUserdex = db.prepare("UPDATE userData SET udexText = ? WHERE userID = ?")
    client.cUserdex.run(message.argresult, caller.id)
    client.cKeys.run(--caller.DB.keys, caller.id)}}