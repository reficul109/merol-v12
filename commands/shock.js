module.exports = {
	name: 'shock',
  args: 1,
  use: 'shock <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    const jimp = require("jimp")
    jimp.read("./assets/jimp/shock.png").then(function (shock) {
    jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(async function (font) {
    await shock.print(font, 80, 70, argresult1, 160)
    await shock.write("./assets/jimp/shockresult.png")
    await origin.send('Done!', {files:["./assets/jimp/shockresult.png"]})})})}}