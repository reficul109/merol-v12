module.exports = {
	name: 'help',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    embed.addField('Help Page:', v.URL)
    embed.addField('Last Update:', 'WIP')
    if (message.guild === client.guilds.cache.get(v.srvrID)) {embed.addField('Mod Password:', v.modPass)}
    embed.setColor(v.corrColor)
  	origin.send(f.randomObj(a.helpFl), embed)}}