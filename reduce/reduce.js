//reduce // in reduce many item or many things its make to one single like [2,3,4,5] total 14
const arr = [2, 4, 5, 6, 7, 8];
const sumVal = arr.reduce((res, currentValue) => res + currentValue); //accumulator (result) + currentvalue
console.log(sumVal);

//start ma dui ota number(element) result and current plus huncha ani value result
// ma jancha tyo result aba current ma plus huncha
// ---------------------
const number = [5, 6, 7, 8, 11, 15, 30];
const sumNumber = number.reduce((res, currentValue) => res + currentValue); //previous and current value
console.log(sumNumber);

//if largest number print //
let value = [2, 0, 1, 6, 9];
const total = value.reduce((res, current) => {
  return res > current ? res : current;
});
console.log(total);

let fruits = ["mango", "banana", "kiwi"];
const oneFruit = fruits.reduce((res, current) => {
  return fruits.length;
});
console.log(oneFruit);

//practice
let studentsMarks = [77, 33, 66, 35, 67, 78];
let markers = studentsMarks.filter((val) => {
  return val > 70;
});
console.log(markers);

let n = prompt("Enter a number: ");
let arr1 = [];

for (let i = 1; i <= n; i++) {
  arr1.push(i);
}
console.log(arr1);

let sum = arr.reduce((res, current) => {
  return res + current;
});
console.log(sum);

let square = arr.reduce((res, current) => {
  return res * current;
});
console.log(square);
