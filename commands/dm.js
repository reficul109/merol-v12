module.exports = {
	name: 'dm',
  use: 'dm <userMention> <text>',
  args: 2,
  ARA: true,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (!message.mentions.users.size) {return message.react('❌')}
    var argresult2 = message.args.slice(2).join(' ')
    embed.setColor(v.corrColor)
    embed.setAuthor(caller.id + ' - ' + caller.tag + ' sent a dm', caller.displayAvatarURL())
    embed.addField(message.content, (msgAtt || 'No attachments').toString())
    client.channels.cache.get("565649417391046674").send(embed)
    message.mentions.users.first().send(argresult2, {files: msgAtt}).catch(() => origin.send('Unable to send.'))}}
