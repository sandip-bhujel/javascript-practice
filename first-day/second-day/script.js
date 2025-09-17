//variables //
// myName = "sandip bhujel";
// console.log(myName); //---myName maa double code rakhyo vane as is it same print huncha myName nai print huncha
//but double code narakhey full name print huncha//
//myName is variable --- sandip bhujel is value

// hisAge = 33;
// console.log(hisAge);

// hello = null;
// console.log(hello);

//dynamically typed languaage//
//  = sign mean is assignment operator

//some rules in variable //
//writting case sensitive like upper case and lower case "a" "A"
// fullName = "hari ram";
// // FULLNAME = "chandra ram";
// console.log(fullName);
//its a different not good
// console.log(FULLNAME);
//varible no space can use just _, $ ,letters,digits
// fullname123;
// fullname_;
// fullnameho;
// _fullName;
//reserved word can not be variable you can search in google reserved words//

// fullName; //camel case

//let const var //
let fullName = "sandip bhujel";
console.log(fullName);

//let ma re declare garna sakindaina but reupdate garna sakincha yo pani block scope
let age = 33;
age = 54;
age = 55; //age ma value dherai lekhna sakincha but variable same eauta huncha //
console.log(age);

//const ma re declare garna sakidaina update pani this is a block scope variable//
// const age = 22;
const PI = 3.14;
console.log(PI);

let a; //yesto pani huncha value nadiyeko
console.log(a); //yo undefined huncha
{
  let a = 4;
  console.log(a);
} //block bhittra print a value but eutai block ma duita variable hudaina naya block banauna parcha like

{
  let b = 28;
  console.log(b);
}
