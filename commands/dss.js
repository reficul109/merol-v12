module.exports = {
	name: 'dss',
  use: 'dss <text [only A-Z]>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    new jimp(500, 500, 0xFFFFFFFF, (err, image) => {    
    jimp.loadFont('./assets/jimp/dss.fnt').then(function (font) {
    image.print(font, 5, 5, message.argresult, 490)
    image.write('./assets/jimp/dssresult.png')
    origin.send('Done!', {files:['./assets/jimp/dssresult.png']})})})}}