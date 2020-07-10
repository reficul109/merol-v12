module.exports = {
	name: 'idsay',
  args: 2,
  ARA: true,
  use: 'idsay <channelID> <text>',
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult2 = message.args.slice(2).join(' ')
    var chann = client.channels.cache.get(message.args[1])
    if (!chann) {return message.react('❌')}
    chann.startTyping()
    chann.send(argresult2, {files: msgAtt}).then(() => chann.stopTyping())}}