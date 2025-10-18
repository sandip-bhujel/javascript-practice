//array is a collection of items //
let names = ["ram", "hari", "shyam", "gita"];
console.log(names);
console.log(names.length); //4
console.log(typeof names); //object

let studentMarks = ["37", "55", "66", "98"];
console.log(studentMarks);
console.log(typeof studentMarks); //object

//array in looping //
let fruits = ["orange", "apple", "mango", "kiwi", "banana"];
console.log(fruits[3]); //kiwi 0 1 2....
console.log(fruits[1]); //apple 0 1 2..
//using loop //
//arrays, string, objects//
//for loop//
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[1]);
}

let names1 = ["hari", "shyam", "asmita", "gole", "shreya"];
for (let index = 0; index < names1.length; index++) {
  console.log(names1[index]);
  //   console.log(names1);//array ma output
}

//for of//
let countries = ["nepal", "america", "india", "china"];

for (let country of countries) {
  console.log(country.toLocaleUpperCase());
}

let marks_students = [55, 65, 77, 85, 99];
let sum = 0;
for (let val of marks_students) {
  sum += val;
}
let avarage = sum / marks_students.length;
console.log(`avarage marks of the students = ${avarage}`);

//practice questions//
let items = [250, 650, 300, 400];
for (let index = 0; index < items.length; index++) {
  let offer = items[index] / 10;
  items[index] -= offer;
}
console.log(items);
