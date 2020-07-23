module.exports = {
	name: 'marry',
  use: 'marry <characterName>',
  args: 1,
  keyreq: 1,
  guild: true,
  imgreq: true,
  execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    jimp.read(msgAtt[0]).then(async function (waifu) {await waifu.write('./public/bot/waifu.png')})
    message.delete()
    embed.addField(message.argresult, '(Meme Series)\n**109**')
    embed.setImage(v.URL + 'bot/waifu.png')
    embed.setColor(v.wrngColor)
    origin.send(embed).then(function (nMessage) {nMessage.react('💖')})
    client.cKeys.run(--caller.DB.keys, caller.id)}}