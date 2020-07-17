module.exports = {
	name: 'dss',
  args: 1,
  use: 'dss <text [only A-Z]>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    const jimp = require("jimp")
    new jimp(500, 500, 0xFFFFFFFF, (err, image) => {    
    jimp.loadFont("./assets/jimp/dss.fnt").then(async function (font) {
    await image.print(font, 5, 5, argresult1, 490)
    await image.write("./assets/jimp/dssresult.png")
    await origin.send('Done!', {files:["./assets/jimp/dssresult.png"]})})})}}
