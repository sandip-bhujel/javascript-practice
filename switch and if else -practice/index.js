//using switch and if else check the even and odd//

let number = 8;
if (number % 2 === 0) {
  console.log(`${number} "this number is even"`); //---concating gareko bactick use
} else {
  console.log(`${number} "this number is odd "`);
}

//check voter //
let age = 22;
if (age >= 18) {
  console.log("yes you can vote no problem");
} else {
  console.log("you cant vote anymore");
}

//website menu make using switch//
let menu = "about me ";
switch (menu) {
  case "home":
    console.log("you are on the now home page");
    break;
  case "contact me ":
    console.log("you are now on the contact page");
    break;
  case "blog":
    console.log("you are on the blog page");
    break;
  default:
    console.log("page not found");
}

//shoping discount offer //
let cost = 2000;
let discount = 0;
if (cost > 900) {
  discount = 20;
} else if (cost > 500) {
  discount = 10;
} else {
  discount = 15;
}
console.log(`you got discount ${discount}% discount`);

//-------------------------------------

//user name login using if else//
let username = "admin baba";
let password = "2345";
if (username === "admin baba" && password === "2345") {
  console.log("log in successful");
} else {
  console.log("invalid your user or password");
}
