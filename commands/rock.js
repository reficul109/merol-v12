module.exports = {
	name: 'rock',
  use: 'rock <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    jimp.read('./assets/jimp/rock.png').then(function (rock) {
    jimp.loadFont('./assets/jimp/OP24.fnt').then(function (font) {
    rock.print(font, 560, 130, message.argresult, 170)
    rock.write('./assets/jimp/rockresult.png')
    origin.send('Done!', {files:['./assets/jimp/rockresult.png']})})})}}