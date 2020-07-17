module.exports = {
	name: 'dm',
  args: 2,
  ARA: true,
  use: 'dm <userMention> <text>',
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult2 = message.args.slice(2).join(' ')
    if (!message.mentions.users.size) {return message.react('❌')}
    embed.setColor(v.corrColor)
    embed.setAuthor(caller.id + ' - ' + caller.tag + ' sent a dm', caller.displayAvatarURL())
    embed.addField(message.content, (msgAtt || 'No attachments').toString())
    client.channels.cache.get("565649417391046674").send(embed)
    message.mentions.users.first().send(argresult2, {files: msgAtt}).catch(() => origin.send('Unable to send.'))}}
