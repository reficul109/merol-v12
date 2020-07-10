module.exports = {
	name: 'rate',
  args: 1,
  use: 'rate <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    var waifuworth = Math.floor(Math.random() * 11)
    if (parseInt(message.id.slice(--message.id.length)) % 2) {embed.setAuthor("Ater", v.URL + "bot/ater.png")}
    else {embed.setAuthor("Arbus", v.URL + "bot/arbus.png")}
    embed.addField("I'd rate " + argresult1 + ' a **' + waifuworth + '/10!**', a.rateFl[waifuworth])
    embed.setColor(v.corrColor)
  	origin.send(embed)}}