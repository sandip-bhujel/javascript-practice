//loop is a repeat many times
//   //for loop //
//for(let i = 1; i <= 5; i++){
// console.log("hello");
// }
//example ; 5 time repeat and print hello world
//1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("hello world");
}

//0 to 10
for (let sum = 0; sum <= 10; sum++) {
  console.log("sum of my number");
}

//3 to 9
for (let hello = 3; hello <= 9; hello++) {
  // 3 is a count start from 3 if there 0 start from 0 so
  console.log("world tour");
}
console.log("loop not work from here ");

// 1 to 5 but its calculate sum
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i; //---15 print how?--
}
console.log("sum =", sum);
//total 15 huncha , sum ko value already 0 cha 0 ma i ko value plus huncha sum + 1 = 1 ,
//1 i++ ma jada i ko value 2 huncha 2+1 = 3 huncha 3 i++ ma jada i ko value 3 huncha 3+3 =6 6 again i++ ma jada i ko value
//4 huncha 4 + 6 = 10 huncha 10 feri i++ ma jada i ko value 5 hunchab 5 + 10 = 15 huncha this is the last after is not true //

let num = 1;
for (let i = 2; i <= 6; i++) {
  num = num + i;
}
console.log("num =", num);
//yesma pani same way num ko value aleady 1 ho i ko value 2 cha  num + i = 3 huncha
//3 i++ ma jada i ko value 3 huncha 3 + 3 = 6 huncah 6 again i++ ma jada i ko value 4 huncha 4 + 6 = 10 huncha
//10 again i ++ ma jada i ko value 5 huncha 5 + 10 = 15 vayo feri last 15 i++ ma jada i ko value 6 huncha 6 + 15 = 21 huncha
//total printout 21 huncha//
