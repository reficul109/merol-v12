module.exports = {
	name: 'userdex-i',
  use: 'userdex-i <image [URL or Attachment]>',
  alias: ['ud-i'],
  args: 1,
  ARA: true,
  keyreq: 20,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.cUserdex = db.prepare("UPDATE userData SET udexImg = ? WHERE userID = ?")
    client.cUserdex.run((msgAtt || message.argresult), caller.id)
    client.cKeys.run(--caller.DB.keys, caller.id)}}