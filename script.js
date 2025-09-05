// function clickme() {
//     console.log("clicked")
// }

// clickme()

const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
// btn.onclick = () => (alert("btn clicked"))
// btn.onclick = () => (console.log("clicked btn"))

// btn.addEventListener('click', () => (alert("btn clicked from event")))
// btn.addEventListener('click', () => (console.log("btn clicked from event")))
// btn.addEventListener('click', () => (alert("btn clicked from event 2")))

function onClick(e) {
  // console.log(e.target)
  h1.textContent = "hello world";
  h1.style.color = "red";
}

// btn.addEventListener('click', onClick)
// h1.addEventListener('dblclick', onClick)

let h3 = document.getElementById("h3");

function onInput(e) {
  console.log(e.target.value);
  h3.textContent = e.target.value;
}
function onChecked(e) {
  console.log(e.target.checked);
  const isChecked = e.target.checked;
  h3.textContent = e.target.checked;
  if (isChecked) {
    h3.textContent = "Checked";
  } else {
    h3.textContent = "Not Checked";
  }
}

function onFocus(e) {
  console.log(e.type);
  firstname.style.outlineStyle = "solid";
  firstname.style.outlineWidth = "5px";
  firstname.style.outlineColor = "lightgreen";
}

function onBlur(e) {
  console.log(e.type);
  firstname.style.outlineStyle = "none";
}

function onSubmit(e) {
  // e.preventDefault();
}
const firstname = document.getElementById("firstname");
const selectname = document.getElementById("selectname");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
firstname.addEventListener("input", onInput);
selectname.addEventListener("input", onInput);
checkbox.addEventListener("input", onChecked);

firstname.addEventListener("focus", onFocus);
firstname.addEventListener("blur", onBlur);

submit.addEventListener("click", onSubmit);
