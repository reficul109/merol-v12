module.exports = {
  name: 'serverinfo',
  alias: ['si'],
  args: 0,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var roles = '', emojis = '', cRole = '', cChann = ''
    message.guild.roles.cache.forEach(role => {roles+= ('**' + role.name + '**. ')})
    message.guild.emojis.cache.forEach(emoji => {emojis+= (emoji.toString())})
    if (parseInt(message.guild.DB.customRole)) {cRole+= '<@&' + message.guild.DB.customRole + '>'}
    if (parseInt(message.guild.DB.callChann)) {cChann+= '<#' + message.guild.DB.callChann + '>'}
      embed.setAuthor(message.guild.name + ' [' + message.guild.memberCount + ' Users]')
      embed.setThumbnail(message.guild.iconURL)
      embed.addField('Server ID', message.guild.id)
      embed.addField('Region', message.guild.region)
      embed.addField('Creation', message.guild.createdAt.toDateString() + ' by **' + message.guild.owner.user.tag + '**')
      if (roles.length < 1024) {embed.addField('Roles', (roles || 'None'))} else embed.addField('Roles', 'Too long to post...')
      if (emojis.length < 1024) {embed.addField('Emojis', (emojis || 'None'))} else embed.addField('Emojis', 'Too long to post...')
      embed.addField('Keys (' + message.guild.DB.keysEnabled + ')', '(Total amount: Still a mistery)')
      embed.addField('Custom Role', (cRole || message.guild.DB.customRole))
      embed.addField('Channel for Calls', (cChann || message.guild.DB.callChann))
      embed.setColor(v.corrColor)
      origin.send(embed)}}