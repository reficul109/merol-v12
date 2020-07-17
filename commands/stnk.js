module.exports = {
	name: 'stnk',
  args: 1,
  use: 'stnk <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')    
    const jimp = require("jimp")
    jimp.read("./assets/jimp/stnk.png").then(function (stnk) {
    jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(async function (font) {
    await stnk.print(font, 340, 10, argresult1, 110)
    await stnk.write("./assets/jimp/stnkresult.png")
    await origin.send('Done!', {files:["./assets/jimp/stnkresult.png"]})})})}}