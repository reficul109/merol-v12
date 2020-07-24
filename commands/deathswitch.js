module.exports = {
	name: 'deathswitch',
  alias: ['die', 'kys', 'perish'],
  args: 0,
  lock: 2,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
	  message.react("447515815831535636")
    client.destroy()}}