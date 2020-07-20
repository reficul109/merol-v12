module.exports = {
	name: 'dss',
  args: 1,
  use: 'dss <text [only A-Z]>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    var argresult1 = message.args.slice(1).join(' ')
    new jimp(500, 500, 0xFFFFFFFF, (err, image) => {    
    jimp.loadFont('./assets/jimp/dss.fnt').then(function (font) {
    image.print(font, 5, 5, argresult1, 490)
    image.write('./assets/jimp/dssresult.png')
    origin.send('Done!', {files:['./assets/jimp/dssresult.png']})})})}}