module.exports = {
	name: 'dream',
  args: 0,
  imgreq: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require('jimp')
    jimp.read(msgAtt[0]).then(function (dream) {
    dream.resize(600, jimp.AUTO)
    jimp.read('./assets/jimp/dream.png').then(function (dreamer) {
    new jimp(600, dream.bitmap.height + 160, 0xFFFFFFFF, (err, image) => {
    image.blit(dream, 0, 0)
    image.blit(dreamer, 0, dream.bitmap.height - 100)
    image.write('./assets/jimp/dreamresult.png')
    origin.send('Done!', {files:['./assets/jimp/dreamresult.png']})})})})}}