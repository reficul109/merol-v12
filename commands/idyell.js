module.exports = {
	name: 'idyell',
  args: 2,
  ARA: true,
  use: 'idyell <channelID> <text>',
  thumbs: true,
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    var argresult2 = args.slice(2).join(' ')
    var chann = client.channels.cache.get(args[1])
    if (!chann) {
      return message.react('❌')}
    chann.startTyping()
    chann.send(argresult2.toUpperCase(), {files: msgAtt}).then(() => chann.stopTyping())}}