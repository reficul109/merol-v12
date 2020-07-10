module.exports = {
	name: 'eval',
  args: 1,
  lock: 2,
  use: 'eval <code>',
  thumbs: true,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = message.args.slice(1).join(' ')
	  eval(argresult1)}}