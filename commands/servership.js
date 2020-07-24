module.exports = {
  name: 'servership',
  alias: ['ss'],
  guild: true,
  	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var members = Array.from(message.guild.members.cache.values(), x => x.user.tag), selected1 = f.randomObj(members), selected2 = f.randomObj(members)
    if (message.args.includes('me')) {selected1 = caller.tag}
    else if (message.mentions.users.size) {selected1 = message.mentions.users.first().tag}
    embed.setAuthor("4545's Crackships™", v.URL + 'bot/4545.png')
    embed.addField('Now shipping:', '❤︎ ``' + selected1 + '`` and ``' + selected2 + '``! ❤︎')
    embed.setColor(v.corrColor)
    origin.send(embed).then(function (nMessage) {
      nMessage.react("💖")
      nMessage.react("💔")})}}