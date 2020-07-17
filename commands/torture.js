module.exports = {
	name: 'torture',
  args: 1,
  use: 'torture <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    const jimp = require("jimp")
    jimp.read("./assets/jimp/torture.jpg").then(function (torture) {
    jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(async function (font) {
    await torture.print(font, 190, 30, argresult1, 115)
    await torture.write("./assets/jimp/tortureresult.png")
    await origin.send('Done!', {files:["./assets/jimp/tortureresult.png"]})})})}}