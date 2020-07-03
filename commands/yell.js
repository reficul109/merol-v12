module.exports = {
	name: 'yell',
  args: 1,
  ARA: true,
  use: 'yell <text>',
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = args.slice(1).join(' ')
    message.channel.startTyping()
    if (message.guild) {
      message.delete()}
		message.channel.send(argresult1.toUpperCase(), {files: msgAtt}).then(() => message.channel.stopTyping())}}