module.exports = {
	name: 'feature',
  args: 0,
  guild: true,
  admin: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    origin.send('Your server will be featured in the help page for a month!\n(Remember to enable widgets in your server configuration!, and make sure you have an instant invite channnel set too)')
    client.channels.cache.get("565656454170804254").send('``' + message.guild.id + '`` - Guild **' + message.guild.name + '** wants to be featured [By ' + caller.id + ']')
    client.cKeys.run(caller.DB.keys - 10, caller.id)}}
