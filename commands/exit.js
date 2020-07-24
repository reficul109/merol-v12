module.exports = {
	name: 'exit',
  use: 'exit <guildID>',
  args: 1,
  lock: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var guild = client.guilds.cache.get(message.args[1])
    if (!guild) {return message.react('❌')}
    embed.setTitle('Leave **"' + guild.name + '"**?')
    embed.setColor(v.wrngColor)
    origin.send(embed).then(function (nMessage) {
      nMessage.react("734130786520793129")
      nMessage.react("❌")
      const collector = nMessage.createReactionCollector((reaction, user) => user.id === caller.id, {time: 60000})
      collector.on('collect', reaction => {      
        var emoji = reaction.emoji
        if (emoji.id === "734130786520793129") {
          guild.leave()
          collector.stop()}
        else if (emoji.identifier === "%E2%9D%8C") {
          collector.stop()}})
        collector.on('end', () => {
          nMessage.reactions.removeAll()})})}}