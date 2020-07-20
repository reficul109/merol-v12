module.exports = {
  name: 'randemote',
  args: 0,
  guild: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    var emotes = Array.from(client.emojis.cache.values()), array = [f.randomObj(emotes)]
    if (argresult1.toLowerCase().startsWith('x')) {
      var shitload = parseInt(argresult1.substring(1))
      if (!shitload || shitload > 30) {return message.react('❌')}
      for (i = 1; i < shitload; i++) {array.push(f.randomObj(emotes))}}
    origin.send(array.join(''))}}