module.exports = {
	name: 'wadda',
  args: 1,
  use: 'wadda <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    const jimp = require("jimp")
    jimp.read("./assets/jimp/wadda.png").then(function (wadda) {
    jimp.loadFont("./assets/jimp/waddafont.fnt").then(async function (font) {
    await wadda.print(font, 295, 290, argresult1, 235)
    await wadda.write("./assets/jimp/waddaresult.png")
    await origin.send('Done!', {files:["./assets/jimp/waddaresult.png"]})})})}}