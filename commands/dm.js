module.exports = {
	name: 'dm',
  use: 'dm <userMention> <text>',
  args: 2,
  ARA: true,
  guild: true,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (!message.mentions.users.size) {return message.react('❌')}
    embed.setAuthor(caller.id + ' - ' + caller.tag + ' sent a dm', caller.displayAvatarURL())
    embed.addField(message.content, (msgAtt || 'No attachments').toString())
    embed.setColor(v.corrColor)
    client.channels.cache.get(v.logChann).send(embed)
    message.mentions.users.first().send(message.argresult, {files: msgAtt}).catch(() => origin.send('Unable to send.'))}}
