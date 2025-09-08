const btnone = document.getElementById("btnone");

function onDoubleclick() {
  console.log("double clicked");
  document.body.style.backgroundColor = "green";
}
function onDrag() {
  console.log("drag continue");
}

function DragLeave() {
  console.log("drag leave");
}

function mouseOver() {
  console.log("mouseover");
  document.body.style.backgroundColor = "yellow";
}
function rightClick(event) {
  event.preventDefault();
  document.body.innerText = "Right click is not available";
}

btnone.addEventListener("dblclick", onDoubleclick);
btnone.addEventListener("drag", onDrag);
btnone.addEventListener("drag leave", DragLeave);
btnone.addEventListener("mouseover", mouseOver);
btnone.addEventListener("contextmenu", rightClick);
