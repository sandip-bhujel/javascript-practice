//operators compare//
let a = 10;
let b = "18";
let c = 40;
console.log(a == b);
console.log(a === b);
console.log(a != b); //value matra check garchga
console.log(a !== b); //type and value both chek garcha
console.log(a <= b); // equal and less than together check huncha //
console.log(a >= b);
// a = 10  b = 18   a,b = type ho and 10 18 value ho //

//exercise//
let hello = 25;
let say = "25";
console.log(hello == say);
console.log(hello === say);

//Check if 8 is greater than 12.
let me = 12;
let you = 8;
if (me < you) {
  console.log("yes this is greater than you");
} else {
  console.log(" this not greater  ");
}
//Check if "apple" is equal to "Apple".
let i = "apple";
let y = "apple";
console.log(i == y);

//What will true == 1 and true === 1 return?
true == 1;
true === 1;
//first ko true type and 1 value both is okay thats why its a true//
//second one is true is type and 1 is value but strictly check true is bolean 1 is number so its false//
//---------------------------------
//if a person’s age is 18 or more, print "You are adult"
let age = 28;
let adultAge = 18;
if (age >= adultAge) {
  console.log("you are adult ");
}
