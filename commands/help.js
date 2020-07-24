module.exports = {
	name: 'help',
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    embed.addField('Help Page:', v.URL)
    embed.addField('Last Update:', 'WIP')
    if (message.guild === client.guilds.cache.get(v.srvrID)) {embed.addField('Mod Password:', v.modPass)}
    //if (!message.guild) {embed.addField('Specialized help:', 'https://merol.glitch.me/p/shoptst.html?' + caller.DB.keys + '?' + [Math.pow(caller.DB.keys, 4)])}}
    embed.setColor(v.corrColor)
  	origin.send(f.randomObj(a.helpFl), embed)}}