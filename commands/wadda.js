module.exports = {
	name: 'wadda',
  use: 'wadda <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    jimp.read('./assets/jimp/wadda.png').then(function (wadda) {
    jimp.loadFont('./assets/jimp/waddafont.fnt').then(function (font) {
    wadda.print(font, 295, 290, message.argresult, 235)
    wadda.write('./assets/jimp/waddaresult.png')
    origin.send('Done!', {files:['./assets/jimp/waddaresult.png']})})})}}