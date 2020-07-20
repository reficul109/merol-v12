module.exports = {
	name: 'userdex-i',
  args: 1,
  ARA: true,
  keyreq: 20,
  use: 'userdex-i <image [URL or Attachment]>',
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')   
    client.cUserdex = db.prepare("UPDATE userData SET udexImg = ? WHERE userID = ?")
    client.cUserdex.run((msgAtt || argresult1), caller.id)
    client.cKeys.run(--caller.DB.keys, caller.id)}}