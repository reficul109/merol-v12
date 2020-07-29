module.exports = {
	name: 'imp',
  use: 'imp <text> (Please, be specific)',
  args: 1,
  ARA: true,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (message.argresult.length > 500) {return origin.send('(Do you really need so many letters for this?)')}
    client.channels.cache.get(v.impChann).send('``' + caller.id + '`` - ' + caller.tag + ' (**' + caller.DB.keys + '** keys) sent: ' + message.argresult + '\n\n(Raw Message: ``' + message.argresult  + '``)', {files: msgAtt})}}