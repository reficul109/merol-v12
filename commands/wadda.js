module.exports = {
	name: 'wadda',
  args: 1,
  use: 'wadda <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    var argresult1 = message.args.slice(1).join(' ')
    jimp.read('./assets/jimp/wadda.png').then(function (wadda) {
    jimp.loadFont('./assets/jimp/waddafont.fnt').then(function (font) {
    wadda.print(font, 295, 290, argresult1, 235)
    wadda.write('./assets/jimp/waddaresult.png')
    origin.send('Done!', {files:['./assets/jimp/waddaresult.png']})})})}}