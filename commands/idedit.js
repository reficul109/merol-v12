module.exports = {
	name: 'idedit',
  args: 3,
  lock: 1,
  use: 'idedit <channelID> <messageID> <text>',
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult3 = message.args.slice(3).join(' ')
    var chann = client.channels.cache.get(message.args[1])
    if (!chann) {return message.react('❌')}
    chann.startTyping()
    chann.messages.fetch(message.args[2]).then(function (message) {
      message.edit(argresult3).then(() => chann.stopTyping())})}}