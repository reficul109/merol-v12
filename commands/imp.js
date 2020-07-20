module.exports = {
	name: 'imp',
  args: 1,
  ARA: true,
  use: 'imp <text> (Please, be specific)',
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    if (argresult1.lenght > 500) {return origin.send('(Do you really need so many letters for this?)')}
    client.channels.cache.get("565656454170804254").send('``' + caller.id + '`` - ' + caller.tag + ' (**' + caller.DB.keys + '** keys) sent: ' + argresult1 + '\n\n(Raw Message: ``' + argresult1  + '``)', {files: msgAtt})}}