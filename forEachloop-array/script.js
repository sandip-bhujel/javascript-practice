//foreach loop //
//array.foreach(callback function)
let fruits = ["mango", "apple", "banana", "kiwi", "orange"];
fruits.forEach(function my(val) {
  console.log(val);
});

//callback function//
let rivers = ["marsyangdi", "kali", "gandaki", "bagmati", "seti", "bheri"];
rivers.forEach(function (val) {
  console.log(val);
});

//arrow//
let friends = ["ram", "shyam", "krishna", "gita", "aruna"];
friends.forEach((val) => {
  console.log(val.replace("ram", "hari"));
});

let sports = ["volleyball", "football", "table tenis", "chess", "cricket"];
sports.forEach((val, index) => {
  console.log(val.toLocaleUpperCase(), index, sports);
});
// let sports1 = ["volleyball", "football", "table tenis", "chess", "cricket"];
// sports.forEach((val) => {
//   console.log(val.joint("-"));
// });

//for each using only in string not array

//practice using the for each loop print plus number //
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num + num);
});
