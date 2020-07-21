module.exports = {
  name: 'randemote',
  alias: ['re'],
  args: 0,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var emotes = Array.from(client.emojis.cache.values()), array = [f.randomObj(emotes)]
    if (message.content.toLowerCase().includes(' x')) {
      var shitload = parseInt(message.content.split(' x').slice(1))
      if (!shitload || shitload > 30) {return message.react('❌')}
      for (i = 1; i < shitload; i++) {array.push(f.randomObj(emotes))}}
    origin.send(array.join(''))}}