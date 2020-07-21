module.exports = {
	name: 'idsay',
  use: 'idsay <channelID> <text>',
  args: 2,
  ARA: true,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var chann = client.channels.cache.get(message.args[1])
    if (!chann) {return message.react('❌')}
    chann.startTyping()
    chann.send(message.argresult, {files: msgAtt}).then(() => chann.stopTyping())}}