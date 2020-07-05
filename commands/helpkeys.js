module.exports = {
	name: 'helpkeys',
  args: 0,
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    var modPerma = ''
    if (message.guild === client.guilds.cache.get(v.srvrID)) {
      modPerma+='\n\n🔐 **100 Keys** - Visitor role spot!\n(' + v.prefix + 'drop invite)'}
    embed.addField('General key info', 'Keys are a currency you get by simply talking! (Currently, you have <a:lucky:541345931870732290>: ' + client.userDB.keys + '), Exchange keys to get prizes!')
    embed.addField('Perma-Goal-Prizes', 'Unlocks at:\n**🔒 10 Keys** - Get a cute looking role! (' + v.prefix + 'custom role) (This prize varies from server to server)\n(Users in charge: The owner or mods of the server)\n\n🔒 **20 Keys** - Ability to use "' + v.prefix + 'userdex" (and "' + v.prefix + 'userdex-i") which sets a custom description in the "' + v.prefix + 'userinfo" command!\n\n🔒 **35 keys** - Get a custom random reaction for your messages!, The reaction can be a regular emoji or a server emote (Animated emotes work too) from any server Merol is in!\n(Users in charge: The bot!, just DM me!)' + modPerma)
    embed.addField('Consumables', '**Fake Pokecord spawn** (' + v.prefix + 'pkmn) - Cost 1 key\n**Fake Mudae roll** (' + v.prefix + 'marry) - Cost 1 key\n(These are not meant to do anything)\n**React spam a channel** (' + v.prefix + 'react spam) [30min] - Cost 3 keys\n**Server feature** (' + v.prefix + 'feature) [4weeks] - Cost 10 keys\n')
    embed.addField('**Please, if you dont want keys, use "' + v.prefix + 'disable keys"**', 'Help page: https://merol-v12--reficul109.repl.co')
    embed.setColor(v.corrColor)
    //embed.setImage("../assets/samples.png")
    message.channel.send(embed)}}