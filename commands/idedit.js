module.exports = {
	name: 'idedit',
  use: 'idedit <channelID> <messageID> <text>',
  args: 3,
  lock: 1,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var chann = client.channels.cache.get(message.args[1])
    if (!chann) {return message.react('❌')}
    var argresult3 = message.args.slice(3).join(' ')
    chann.startTyping()
    chann.messages.fetch(message.args[2]).then(function (message) {
      message.edit(argresult3).then(() => chann.stopTyping())})}}