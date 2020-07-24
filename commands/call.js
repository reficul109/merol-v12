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
        origin.send('Correct usage is "' + v.prefix + 'setcall <channelID>"! (Here are a few channels you can call)```css\n' + callChannels + '\n[Sign your server with "' + v.prefix + 'setchannel"]\n[Stop any call from any side by using "!stopcall"]```')}
    else {
      var callChann = channels.get(message.args[1])
      if (callChann === origin) {return message.react('❌')}
      channels.get(v.logChann).send('``' + caller.id + '`` - **' + caller.tag + '** is trying to call **' + callChann.guild + '**')
      embed.setThumbnail(callChann.guild.iconURL({format: 'png', dynamic: true}))
      embed.addField('📡 Calling ' + callChann.guild.name, 'Awaiting for a response')
      embed.setColor(v.corrColor)
      embed2.setThumbnail(message.guild.iconURL({format: 'png', dynamic: true}))
      embed2.addField('📡 ' + message.guild.name + ' is calling you!', '(``Channel ID:' + origin.id + '``)\nYou have 10 minutes to respond\nReact to Accept/Deny the call!.')
      embed2.setColor(v.corrColor)
      origin.send(embed)
      callChann.send(embed2).then(function (nMessage) {
        nMessage.react("734130786520793129")
        nMessage.react("❌")
        const cAccept = nMessage.createReactionCollector(((reaction, nUser) => nUser.id !== v.botID && reaction.emoji.id === "734130786520793129"), {time: 600000})
        const cHangup = nMessage.createReactionCollector(((reaction, nUser) => nUser.id !== v.botID && reaction.emoji.identifier === "%E2%9D%8C"), {time: 600000})
        cAccept.on('collect', () => {
          cAccept.stop()
          cHangup.stop()
          origin.send('📡 Call started!')
          callChann.send('📡 Call started!')
          const oCollector = new Discord.MessageCollector(origin, m => m.author.id !== v.botID, {time: 600000})
          const cCollector = new Discord.MessageCollector(callChann, m => m.author.id !== v.botID, {time: 600000})
          oCollector.on('collect', cMessage => {
            f.signal(cMessage, callChann, oCollector, cCollector)})
          cCollector.on('collect', cMessage => {
            f.signal(cMessage, origin, oCollector, cCollector)})
          oCollector.on('end', () => {
            origin.send('📡 Connection ended...')})
          cCollector.on('end', () => {
            callChann.send('📡 Connection ended...')})})
        cHangup.on('collect', () => {
          cAccept.stop()
          cHangup.stop()
          origin.send('📡 Call denied')
          callChann.send('📡 Call denied')})
        cHangup.on('end', () => {
          nMessage.reactions.removeAll()})})}}}