module.exports = {
	name: 'dropinvite',
  alias: ['di'],
  lock: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    if (!message.member.roles.cache.find(role => role.id === "567465608988590081")) {return  message.react("❌")}
    client.channels.cache.get("413176876903694336").createInvite({maxAge: 0, maxUses: 1, unique: true}).then(invite => {
    caller.send(invite.toString())})
    message.member.roles.remove("567465608988590081")
}}