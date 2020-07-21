module.exports = {
	name: 'ask',
  use: 'ask <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (parseInt(message.id.slice(--message.id.length)) % 2) {embed.setAuthor('Ater', v.URL + 'bot/ater.png')}
    else {embed.setAuthor('Arbus', v.URL + 'bot/arbus.png')}
    embed.addField('"' + message.argresult + '"', f.randomObj(a.ask))
    embed.setColor(v.corrColor)
  	origin.send(embed)}}