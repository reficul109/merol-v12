module.exports = {
	name: 'idyell',
  use: 'idyell <channelID> <text>',
  args: 2,
  ARA: true,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var chann = client.channels.cache.get(message.args[1])
    if (!chann) {return message.react('❌')}
    var argresult2 = message.args.slice(2).join(' ')
    chann.startTyping()
    chann.send(argresult2.toUpperCase(), {files: msgAtt}).then(() => chann.stopTyping())}}