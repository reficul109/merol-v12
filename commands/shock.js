module.exports = {
	name: 'shock',
  use: 'shock <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    var argresult1 = message.args.slice(1).join(' ')
    jimp.read('./assets/jimp/shock.png').then(function (shock) {
    jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(function (font) {
    shock.print(font, 80, 70, argresult1, 160)
    shock.write('./assets/jimp/shockresult.png')
    origin.send('Done!', {files:['./assets/jimp/shockresult.png']})})})}}