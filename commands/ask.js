module.exports = {
	name: 'ask',
  args: 1,
  use: 'ask <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    if (parseInt(message.id.slice(--message.id.length)) % 2) {embed.setAuthor("Ater", v.URL + "bot/ater.png")}
    else {embed.setAuthor("Arbus", v.URL + "bot/arbus.png")}
    embed.addField('"' + argresult1 + '"', f.randomObj(a.ask))
    embed.setColor(v.corrColor)
  	origin.send(embed)}}