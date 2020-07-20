module.exports = {
	name: 'trivia',
  args: 0,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    embed.setAuthor('Random Trivia', v.URL + 'bot/sonia.png')
    embed.addField('Did you know?', f.randomObj(a.trivia))
    embed.setColor(v.corrColor)
  	origin.send(embed)}}