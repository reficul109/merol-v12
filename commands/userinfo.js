module.exports = {
	name: 'userinfo',
  alias: ['ui'],
  args: 0,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var user = (message.mentions.users.first() || client.users.cache.get(message.args[1]) || caller)
    user.DB = db.prepare("SELECT * FROM userData WHERE userID = ?").get(user.id)
    var act = user.presence.activities, link = '', game = ''
    if (parseInt(user.DB.customReact)) {link+= 'https://cdn.discordapp.com/emojis/'}
    if (act[0]) {game+= '\n' + act[0].type.toLowerCase() + ': ' + (act[0].emoji || '').toString() + ' ' + (act[0].state || act[0].name)}
    embed.setAuthor(user.tag)
    embed.setThumbnail(user.displayAvatarURL({format: 'png', dynamyc: true}))
    embed.setColor(v.corrColor)
    embed.addField('User ID', user.id)
    embed.addField('Presence', 'Status: ' + user.presence.status + game)
    if (message.guild && message.guild.member(user)) {embed.addField('Joined', 'Discord: ' + user.createdAt.toDateString() + '\nThis Server: ' + message.guild.member(user).joinedAt.toDateString())}
    embed.addField('Keys (' + user.DB.getKeys + ')', '<a:lucky:541345931870732290>: ' + user.DB.keys)
    embed.addField('Custom React (' + user.DB.getReact + ')', link + user.DB.customReact)
    embed.addField('Userdex (' + v.prefix + 'userdex)', user.DB.udexText)
    if (user.DB.udexImg !== 'None') {embed.setImage(user.DB.udexImg)}
    origin.send(embed).catch(() => origin.send(embed.setImage(v.URL + 'bot/invbig.png')))}}