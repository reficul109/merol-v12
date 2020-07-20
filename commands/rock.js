module.exports = {
	name: 'rock',
  args: 1,
  use: 'rock <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    var argresult1 = message.args.slice(1).join(' ')
    jimp.read('./assets/jimp/rock.png').then(function (rock) {
    jimp.loadFont('./assets/jimp/OP24.fnt').then(function (font) {
    rock.print(font, 560, 130, argresult1, 170)
    rock.write('./assets/jimp/rockresult.png')
    origin.send('Done!', {files:['./assets/jimp/rockresult.png']})})})}}