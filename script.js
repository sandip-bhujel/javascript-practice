const btn = document.getElementById("btn");
const heading = document.getElementById("heading");

function onClick(e) {
  alert("hello click me");
}

function onDoubleClick() {
  console.log("double clicked");
  btn.style.backgroundColor = "orange";
  btn.style.color = "red";
}

function onDrag() {
  console.log("drag continue");
}

function DragEnd() {
  console.log("drag end");
}

function mouseOver() {
  document.body.style.backgroundColor = "orange";
}

function rightClick(e) {
  e.preventDefault();
  document.body.innerText = " Right click not available ";
}

btn.addEventListener("dblclick", onDoubleClick);
btn.addEventListener("click", onClick);
btn.addEventListener("drag", onDrag);
btn.addEventListener("dragend", DragEnd);
btn.addEventListener("mouseover", mouseOver);
btn.addEventListener("contextmenu", rightClick);
