module.exports = {
	name: 'yell',
  use: 'yell <text>',
  args: 1,
  ARA: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    origin.startTyping()
    if (message.guild) {message.delete()}
		origin.send(message.argresult.toUpperCase(), {files: msgAtt}).then(() => origin.stopTyping())}}