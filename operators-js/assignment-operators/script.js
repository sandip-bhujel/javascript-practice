//assignment operators
//=  +=  -+  *= %= **=

//for example
// let a = 4;
// let b = 6;
// a += a = a + 1;

// a += 5;
// a = a + 5; yesto bancha back ma detail

// a -= 7;
// a = a + 7;

// a *= 8;
// a %= 4;
// a /= 3;
// console.log("a = ", a);
// console.log("a = ", a);

//comparison operators
//equal to == , not equal to != , equal to and type === , not equal to and type !==
// let a = 4;
// let b = 5;
// console.log("4 != 5", a != b);
// console.log("4 == 5", a == b);
// console.log("4 === 5", a === b);

// let a = 10;
// let b = 10;
// console.log("10 == 10", a == b);
// console.log("10 != 10", a != b);
// // let a = 3;
// let b = "3"; -- this is a string and its try to convert in number then compare with a = 5; its now true a = 5 b = 5
// console.log("a == b", a == b);   true

//== check the inside value
// === check the datatype also

// console.log("a === b", a === b);//false because === check the datatype too if there in q let b = "10";  its false;

// let a = 5;
// let b = 4;
// console.log("a > b", 5 > 4);
// console.log("a < b", 5 < 4);
// console.log("a >= b", 5 >= 4);
// console.log("a <= b", 5 <= 4);

//logical operators
let a = 8;
let b = 6;

let partOne = a > b; //true
let partTwo = a === 8; //true
console.log("partOne && partTwo =", partOne && partTwo);
//logical or || in both any one condition is true result is true
console.log("partOne || partTwo =", partOne || partTwo);

//logical not
//logical not is opposite value print
console.log("! (8 < 6) = ", !(a === b)); //! using then print opposite
