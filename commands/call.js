module.exports = {
	name: 'call',
  use: 'call <channelID / "List">',
  args: 1,
  guild: true,
  execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var channels = client.channels.cache, guilds = client.guilds.cache, callChannels = ''
    if (!channels.get(message.args[1])) {
      for (const guild of db.prepare('SELECT * FROM srvrData').iterate()) {
      if (guild.callChann !== 'None' && channels.get(guild.callChann)) {
        callChannels+= guilds.get(guild.serverID).name + ': #' + guild.callChann + '\n'}}
      origin.send('Correct usage is "' + v.prefix + 'setcall <channelID>"! (Here are a few channels you can call)```css\n' + callChannels + '\n[Sign your server with "' + v.prefix + 'setchannel"]\n[Stop any call from any side by using "' + v.prefix + 'stopcall"]```')}
  }}