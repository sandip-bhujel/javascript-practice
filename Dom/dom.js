console.log("hello bro");
alert("my main page");

//Dom is document object model //which is anything want to change on index.html page using dom its a dynamically change
//dom is need html css js

//DOM MANIPULATION//
//Selecting with id //
//document.getElementById("this is id name ")
//---------------------------------------------
//Selecting with class//
//document.getElementById("this is class name")
//-----------------------------------
//Selecting with tag//t
//document.getElementByTagName("p""h1""div")

//why javascript write code separate page ?
//because 1, readability 2, browser catch 3,

let heading = document.getElementById("head");
console.log(heading);
let button = document.getElementById("btn");
console.log(button);
// ----------------------------------------------
// query selector //
//document.querySelecter("id" , "class" , "tag")
//return first element//
//document.querySelectorAll("is,class,tag")
//return a node
let element = document.querySelector("p");
console.log(element);
let element2 = document.querySelector("h1");
console.log(element2);
// ---------------------------------------
//DOM properties/
//tagname //innerText//innerHTML//textContent//
