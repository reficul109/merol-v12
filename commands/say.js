module.exports = {
	name: 'say',
  args: 1,
  ARA: true,
  use: 'say <text>',
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = args.slice(1).join(' ')
    message.channel.startTyping()
    if (message.guild) {
      message.delete()}
		message.channel.send(argresult1, {files: msgAtt}).then(() => message.channel.stopTyping())}}