module.exports = {
  name: 'someone',
  args: 0,
  guild: true,
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    var users = client.users.cache
    var members = Array.from(message.guild.members.cache.values(), x => x.id)
    if (message.content.toLowerCase().includes('!online')) {
      members = members.filter(value => users.get(value).presence.status !== 'offline')}
    if (message.content.toLowerCase().includes('!nobots')) {
      members = members.filter(value => !users.get(value).bot)}
    var selectedMember = users.get(f.randomObj(members))
    embed.setAuthor('Random User!', selectedMember.displayAvatarURL())
    embed.addField('User', selectedMember)
    embed.setColor(v.corrColor)
    message.channel.send(embed)}}