module.exports = {
	name: 'help',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    embed.addField('Help Page:', v.URL)
    embed.addField('Last Update:', 'Back Online! [July 26]')
    if (message.guild === client.guilds.cache.get(v.srvrID)) {embed.addField('Mod Password:', v.modPass)}
    //if (!message.guild) {embed.addField('Specialized help:', v.URL + 'shoptst.html?k=' + caller.DB.keys + '?c=' + [Math.pow(caller.DB.keys, 4)])}}
    embed.setColor(v.corrColor)
  	origin.send(f.randomObj(a.helpFl), embed)}}