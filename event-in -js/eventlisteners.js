//event listeners //
//event handelling time we using one is inline handeling=in a html code doing all codes for handle but its
// a bulk so we make javascript handling  and another javascript event handeling //

//node.addEventListener(event , callback)

//node.removeEventListner(event , callback)

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);

//   };

btn1.addEventListener("dblclick", () => {
  console.log("button was clicked and change to something");
});

btn1.addEventListener("dblclick", () => {
  console.log("button was clicked-2");
});

//
