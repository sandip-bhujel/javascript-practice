<<<<<<< HEAD
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
=======
//Datatypes //
//string//
let myName = "sandip bhujel";
console.log("my name is a :", myName);

let address = "kathmandu dhobikhola -12";
console.log("my home address is now", address);

//number//
let myAge = 35;
console.log("my age is now", myAge, "year old");

let blockNo = 2567;
console.log("my home block number is", blockNo);

//bolean//
let isDriver = true;
console.log("can i drive a new car?", isDriver);

let isCook = false;
console.log("he is not a good at cook food", isCook);

//null//
let cat = "null";
console.log("cat", cat);

//undefined//
let future;
console.log("my future is", future);
>>>>>>> 151698f3e2b1a70e6fee81d8dbadc3cbcae1a9bc
