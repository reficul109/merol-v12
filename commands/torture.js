module.exports = {
	name: 'torture',
  use: 'torture <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    var argresult1 = message.args.slice(1).join(' ')
    jimp.read('./assets/jimp/torture.jpg').then(function (torture) {
    jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(async function (font) {
    torture.print(font, 190, 30, argresult1, 115)
    torture.write('./assets/jimp/tortureresult.png')
  origin.send('Done!', {files:['./assets/jimp/tortureresult.png']})})})}}