module.exports = {
	name: '4545',
  use: '4545 <text>',
  args: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    embed.setAuthor("4545's Analysis™", v.URL + 'bot/4545.png')
    embed.addField('MY ANALYSIS ON "' + message.argresult.toUpperCase() + '":', f.randomObj(a.v4545))
    embed.setColor(v.corrColor)
  	origin.send(embed)}}