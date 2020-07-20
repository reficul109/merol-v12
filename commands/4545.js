module.exports = {
	name: '4545',
  args: 1,
  use: '4545 <text>',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
    embed.setAuthor("4545's Analysis™", v.URL + 'bot/4545.png')
    embed.addField('MY ANALYSIS ON ' + argresult1.toUpperCase() + ':', f.randomObj(a.v4545))
    embed.setColor(v.corrColor)
  	origin.send(embed)}}