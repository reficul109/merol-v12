module.exports = {
	name: 'pkmn',
  keyreq: 1,
  guild: true,
  imgreq: true,
  execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    jimp.read(msgAtt[0]).then(async function (pkmn) {await pkmn.write('./public/bot/pkmn.png')})
    message.delete()
    embed.addField('A wild pokémon has appeared!', 'Guess the pokémon and type p!catch <pokémon> to catch it!')
    embed.setImage(v.URL + 'bot/pkmn.png')
    embed.setColor(v.corrColor)
    origin.send(embed)
    client.cKeys.run(--caller.DB.keys, caller.id)}}