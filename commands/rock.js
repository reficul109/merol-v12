module.exports = {
	name: 'rock',
  args: 1,
  use: 'rock <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    const jimp = require("jimp")
    jimp.read("./assets/jimp/rock.png").then(function (rock) {
    jimp.loadFont("./assets/jimp/OP24.fnt").then(async function (font) {
    await rock.print(font, 560, 130, argresult1, 170)
    await rock.write("./assets/jimp/rockresult.png")
    await origin.send('Done!', {files:["./assets/jimp/rockresult.png"]})})})}}