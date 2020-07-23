module.exports = {
	name: 'reactspam',
  alias: ['rs'],
  args: 0,
  keyreq: 3,
  guild: true,
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var emotes = Array.from(client.emojis.cache.values(), x => x.id)
    const collector = new Discord.MessageCollector(origin, m => m.author.id !== v.botID, {time: 1800000})
    collector.on('collect', cMessage => {
      if ((cMessage.author.id === caller.id || cMessage.member.hasPermission("MANAGE_MESSAGES")) && cMessage.content.toLowerCase() === ('!stop')) {collector.stop()}
      cMessage.react(f.randomObj(emotes))
      cMessage.react(f.randomObj(emotes))
      cMessage.react(f.randomObj(emotes))})
    collector.on('end', () => {origin.send("It's over...")})
    caller.send('(To stop use **!stop** in the channel you used it!)')
    client.cKeys.run(caller.DB.keys - 3, caller.id)}}