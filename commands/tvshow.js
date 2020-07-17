module.exports = {
	name: 'tvshow',
  args: 0,
  imgreq: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    const jimp = require("jimp")
    jimp.read(msgAtt[0]).then(function (show) {
    jimp.read("./assets/jimp/tvshow.png").then(async function (tv) {
    await show.scaleToFit(360, 240)
    new jimp(900, 900, '#000000', (err, image) => {
    var CentWidth = parseInt([(360 - show.bitmap.width) / 2 + 250]), CentHeight = parseInt([(240 - show.bitmap.height) / 2 + 330])
    image.blit(show, CentWidth, CentHeight)
    image.blit(tv, 0, 0)
    image.write("./assets/jimp/tvshowresult.png")
    origin.send('Done!', {files:["./assets/jimp/tvshowresult.png"]})})})})}}