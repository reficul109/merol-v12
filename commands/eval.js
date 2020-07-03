module.exports = {
	name: 'eval',
  args: 1,
  lock: 2,
  use: 'eval <code>',
  thumbs: true,
	execute(client, message, args, msgAtt, embed, embed2, db, a, f, v) {
    var argresult1 = args.slice(1).join(' ')
	  var evaled = eval(argresult1)}}