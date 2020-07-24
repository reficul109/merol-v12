module.exports = {
	name: 'dmblacklist',
  alias: ['dmb'],
  args: 0,
  lock: 1,
	execute(Discord, client, message, caller, origin, msgAtt, embed, embed2, db, a, f, v) {
    var badUsers = '', users = client.users.cache
    for (const user of db.prepare('SELECT * FROM userData').iterate()) {
    if (user.blockDM !== 'N' && users.get(user.userID)) {
      badUsers+= (users.get(user.userID).tag + ': #' + user.userID + '\n')}}
    origin.send('List of users in the DM blacklist```css\n' + badUsers + '```')}}