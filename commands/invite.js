module.exports = {
	name: 'invite',
  args: 0,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
  	origin.send(f.randomObj(a.inviFl) + "\nhttp://discord.com/oauth2/authorize?client_id=411986554156744724&scope=bot&permissions=473300049")}}