//inner text//
// let div = document.querySelector("div");
// console.dir(div);

// //innerHTML//
// div.innerHTML = "hello world";
// //textContent//
// div.innerText = "hello world";

// practice questions//
//create a h2 heading  with text "hello javascript". Append "from hello java developer" to this text using js
// let h2 = document.querySelector("h2");
// console.log(h2.innertext); //h2 lai access garera text change garnu paryo access garda class id tag thaha hunu paryo
// h2.innerText = h2.innerText + "& hello java developer";

//create 3 divs common class name "box"

let div = document.querySelectorAll(".box");
let index = 1;
for (let div of divs) {
  div.innerText = `new type of value ${index}`;
  index++;
}
