module.exports = {
	name: 'getreact',
  alias: ['gre'],
  keyreq: 35,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    client.cReact = db.prepare("UPDATE userData SET getReact = ?, customReact = ? WHERE userID = ?")
    embed.addField('Custom reaction options', '<:y_:734130786520793129> = Enable custom react\n❌ = Disable custom react\nReact with **any** other emoji you want as custom reaction! (I must have access to it) (You will lose a key)\nIgnore this message to Cancel')
    embed.setColor(v.corrColor)
    origin.send(embed).then(function (message) {
    message.react("734130786520793129")
    message.react("❌")
    const collector = message.createReactionCollector((reaction, user) => user.id === caller.id, {time: 600000})
    collector.on('collect', reaction => {
      var emoji = reaction.emoji
      if (emoji.id === "734130786520793129") {
        client.cReact.run('Y', caller.DB.customReact, caller.id)
        origin.send('Custom reaction enabled.')}
      else if (emoji.identifier === "%E2%9D%8C") {
        client.cReact.run('N', caller.DB.customReact, caller.id)
        origin.send('Custom reaction disabled.')}
      else if (emoji.url) {
        if (!emoji.available) {return origin.send('I must be in the server where your emote is.')}
        client.cReact.run('Y', emoji.id, caller.id)
        client.cKeys.run(--caller.DB.keys, caller.id)
        origin.send('Custom reaction updated.')}
      else {
        client.cReact.run('Y', emoji.toString(), caller.id)
        client.cKeys.run(--caller.DB.keys, caller.id)
        origin.send('Custom reaction updated.')}
      collector.stop()})})}}