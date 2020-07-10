module.exports = {
	name: 'say',
  args: 1,
  ARA: true,
  use: 'say <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    origin.startTyping()
    if (message.guild) {message.delete()}
		origin.send(argresult1, {files: msgAtt}).then(() => origin.stopTyping())}}