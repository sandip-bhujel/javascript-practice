let modebutton = document.querySelector("#mode");
let lightmode = "light";

modebutton.addEventListener("click", () => {
  if (lightmode === "light") {
    lightmode = "dark";
    //background color change //
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    lightmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log("trying to change");
});
