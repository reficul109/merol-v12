module.exports = {
	name: 'rate',
  use: 'rate <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var waifuworth = Math.floor(Math.random() * 11)
    if (parseInt(message.id.slice(--message.id.length)) % 2) {embed.setAuthor('Ater', v.URL + 'URL/ater.png')}
    else {embed.setAuthor('Arbus', v.URL + 'URL/arbus.png')}
    embed.addField("I'd rate \"" + message.argresult + '" a **' + waifuworth + '/10!**', a.rateFl[waifuworth])
    embed.setColor(v.corrColor)
  	origin.send(embed)}}