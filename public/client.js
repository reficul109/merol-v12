function loadContent(contentID) {
  var i, x, tablinks
  x = document.getElementsByClassName("page_content")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"}
  document.getElementById(contentID).style.display = "block"}

function loadInfo(InfoID) {
  var i, x, tabinfo
  x = document.getElementsByClassName("comm_content")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"}
  document.getElementById(InfoID).style.display = "block"}

function checkKeys() {
  var locks = document.URL.split('?')
  if (locks.length !== 3) {return window.alert('You are missing arguments (Try "mrl!help" in Merols DMs)')}
  if (parseInt(locks[1].substring(2)) === Math.pow(parseInt(locks[2].substring(2)), 1/4)) {
    window.alert('You are currently holding ' + locks[1].substring(2) + ' keys.')
    var audioSrc = document.getElementById("audio")
    var shopFrame = document.getElementById("shop")
    shopFrame.removeAttribute('onclick')
    shopFrame.src = "https://merol-v12--reficul109.repl.co/page/openingbig.gif"
    window.setTimeout(function() {shopFrame.src = "https://merol-v12--reficul109.repl.co/page/shoptstbig.png"}, 1571.42)
    audioSrc.volume = 0.25
    audioSrc.play()} 
  else {window.alert('Dont mess with the URL, cheater')}}

function checkpass() {
  var pass = document.getElementById("pass")
  $.ajax({url: 'https://merol-v12--reficul109.repl.co/generalD.json', dataType: 'json', success: function(data) {
  if (pass.value === data.modPass) {
    pass.style.backgroundColor = "#63df47"
    document.getElementById("are_you").innerHTML = '<h2> A few extra commands for mods have been unlocked </h2>'
    var i, x, secrets
    x = document.getElementsByClassName("secret_comm")
    for (i = 0; i < x.length; i++) {
      x[i].style.fontSize = "1em"}}}})}

function changeday(value) {
  var i1, x1, holidays
  x1 = document.getElementsByClassName("days")
  for (i1 = 0; i1 < x1.length; i1++) {
    x1[i1].style.display = "none"}
    document.getElementById("day" + value).style.display = "block"
  var i2, x2, celebrants
  x2 = document.getElementsByClassName("d" + value)
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].src = x2[i2].getAttribute("a_src")}}

function rng_flavors() {
  //Tetsu Speed
  document.getElementById("tetsu").scrollAmount = [Math.floor(Math.random() * 35 + 1)]
  //Main
  if (document.title == "Merol's Commands") {
    //JSON
    $.ajax({url: 'https://merol-v12--reficul109.repl.co/generalD.json', dataType: 'json', success: function(data) {
      document.getElementById("pfp").src = data.currIcon
      document.getElementById("userCount").innerHTML = data.nUsers
      document.getElementById("srvrCount").innerHTML = data.nServers}})
    //PassBoxTxt
    const flavors = ["It's a secret to everybody", "┬┴┤v ･)", "Text Here", "BrittWasHere", "Not a hint", "err404_txtnotfound", "I m S e n t i e n t", "Password Here", "!", "No lurky..."]
    var flavor = flavors[Math.floor(Math.random() * flavors.length)]
    document.getElementById("pass").placeholder = flavor}}