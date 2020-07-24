module.exports = {
  name: 'randemote',
  alias: ['re'],
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var emotes = Array.from(client.emojis.cache.values()), array = [f.randomObj(emotes)]
    if (message.args[1].startsWith('x')) {
      var shitload = parseInt(message.args[1].substring(1))
      if (!shitload || shitload > 30) {return message.react('❌')}
      for (i = 1; i < shitload; i++) {array.push(f.randomObj(emotes))}}
    origin.send(array.join(''))}}