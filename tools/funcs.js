module.exports.randomObj = function(array) {return array[Math.floor(Math.random() * array.length)]}
module.exports.signal = function(message, callChannel, oCollector, cCollector) {
  if (message.content.toLowerCase() === ('!stopcall')) {
    oCollector.stop()
    cCollector.stop()
    return;}
  else if (message.content.startsWith("//")) {return message.react("👀")}
  callChannel.send('``' + message.author.tag + '``: ' + message.content, {files: Array.from(message.attachments.values(), x => x.url)})}