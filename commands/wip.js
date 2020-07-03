module.exports = {
	name: 'wip',
  args: 0,
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    embed.addField('Things that ' + f.randomObj(a.wipFl) + '...', 'Verification (Priority)\nMore prizes\nSecret Commands (?)\nExpand Templates and RandOST\nWikidex Rework (as well as related)\nConnection Page-Bot (?)\nHelp Videos (???)')
    embed.setColor(v.corrColor)
  	message.channel.send('<a:tetsu:540662532646371328>', embed)}}