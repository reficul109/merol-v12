module.exports = {
	name: 'stnk',
  use: 'stnk <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    jimp.read('./assets/jimp/stnk.png').then(function (stnk) {
    jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(function (font) {
    stnk.print(font, 340, 10, message.argresult, 110)
    stnk.write('./assets/jimp/stnkresult.png')
    origin.send('Done!', {files:['./assets/jimp/stnkresult.png']})})})}}