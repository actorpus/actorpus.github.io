function onLoad () {
  var div = document.createElement("div");
  div.id = "hack_menu"
  div.className = "hack_menu"
  div.innerText = "Seneca Hack\nActorpus"

  var style = document.createElement("style");
  style.innerText = `
.hack_menu {
    opacity: 0;
    transition: 1s ease;
    border: 1px solid;
    width: 100px;
    background-color: #FF0000;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
}

.hack_menu:hover {
    opacity: 1;
    transition: 1s ease;
}

.hack_menu_visible {
    opacity: 1;
    transition 1s ease;
}`

  document.body.insertBefore(style, null);
  document.body.insertBefore(div, null);

  setInterval(lookInserts, 1000); // start searching loop
}

// .innerHTML.split(">")[1].split("<")[0]
function lookInserts () {
  var list = document.getElementsByClassName("TestedWord_word_placeholder__2xuzY");
  var list2 = document.getElementsByClassName("BlurredWord__word--blurred");
  var box = document.getElementById("hack_menu");


  box.innerHTML = ""
  for (var i = 0; i < list.length; i++) {
    box.innerText += list[i].innerHTML.split(">")[1].split("<")[0] + "\n";
  }
  for (var i2 = 0; i < list2.length; i++) {
    box.innerText += list2[i].firstElementChild.textContent + "\n";
  }

  box.innerHTML += "<sub>by actorpus</sub>"

  if (box.innerHTML == "<sub>by actorpus</sub>")
    {box.classList.remove("hack_menu_visible")}
  else
    {box.classList.add("hack_menu_visible")}
}

document.body.onload = onLoad;