module.exports = {
	name: 'wip',
  args: 0,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    embed.addField('Things that ' + f.randomObj(a.wipFl) + '...', 'Verification (Priority)\nMore prizes\nSecret Commands (?)\nExpand Templates and RandOST\nWikidex Rework (as well as related)\nConnection Page-Bot (?)\nHelp Videos (???)')
    embed.setColor(v.corrColor)
  	origin.send('<a:tetsu:540662532646371328>', embed)}}