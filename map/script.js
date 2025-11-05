//map//

//array.map(callbackfunction(value , index, array))

//map also same like for each but map is new array create and return value

let numbers = [55, 44, 66];
numbers.map((val) => {
  console.log(val);
});
let fruits = ["mango", "orange", "banana", "grapes"];
let newFruits = fruits.map((val) => {
  return val + "kiwi";
});
console.log(newFruits);

//filter//
let num = [2, 4, 6, 7, 8, 9, 10, 11, 12];
let evenNum = num.filter((val) => {
  return val % 2 === 0;
});
console.log(evenNum);
