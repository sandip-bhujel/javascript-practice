//data-types two types
//primitive data types --- Number, string, boolean,bigint,symbole,null,undefined
//non-,primitive data types---objects => arays,functions

//student //
//student name = string name is string
//student age = number age is number
//marks = number
//isfailed/passed = boolean

//object example//
const student = {
  fullName: "haribahadur",
  age: 25,
  marks: 300,
  ispass: true,
};
console.log(student);
console.log(typeof student); //typeof is checked variable type
//inside of objest have key value
//fullName = key , haribahadur = value

//questions //
//create a const object called "proiduct" to store information

const product = {
  name: "parker pen",
  rating: " 5 star",
  isdeal: true,
  price: 2000,
  offer: 30,
};
console.log(product);
console.log(typeof product);

// "1234" + 2
// 12342 add in string converting

//question//
//facebook profile page store imformation using const object
const facebookProfile = {
  userName: "Broo kto",
  rating: 4,
  followers: 2.4,
  follwing: 1200,
  details: "hamro program in the next year ",
  isfollow: true,
};
console.log(facebookProfile);
console.log(typeof facebookProfile);
console.log(typeof facebookProfile["rating"]);
console.log(typeof facebookProfile["userName"]);
console.log(typeof facebookProfile["details"]);
console.log(typeof facebookProfile["isfollow"]);
