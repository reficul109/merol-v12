module.exports = {
	name: 'idm',
  use: 'idm <userID> <text>',
  args: 2,
  ARA: true,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var user = client.users.cache.get(message.args[1]), tag
    if (!user) {return message.react('❌')}
    if (origin.id === "445068696310906901") {
      client.modsDB = db.prepare("SELECT * FROM mods WHERE userID = ?").get(caller.id)
      tag = '\n└ **Mod ' + client.modsDB.modNick + '**'}
    else {
      embed.setColor(v.corrColor)
      embed.setAuthor(caller.id + ' - ' + caller.tag + ' sent a dm', caller.displayAvatarURL())
      embed.addField(message.content, (msgAtt || 'No attachments').toString())
      client.channels.cache.get(v.logChann).send(embed)
      tag = '\n└ **__Not a Mod__**'}
    user.send(message.argresult + tag, {files: msgAtt}).catch(() => origin.send('Unable to send.'))}}