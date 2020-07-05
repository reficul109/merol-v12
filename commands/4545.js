module.exports = {
	name: '4545',
  args: 1,
  use: '4545 <text>',
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = args.slice(1).join(' ')
    embed.setAuthor("4545's Analysis™", "https://cdn.discordapp.com/app-icons/458733093600231454/2172889360cab924627869ebed08bf53.png")
    embed.addField('MY ANALYSIS ON ' + argresult1.toUpperCase() + ":", f.randomObj(a.v4545))
    embed.setColor(v.corrColor)
  	message.channel.send(embed)}}