//funcrtion create and call //
//function is a block of code which is perform once we create a function can call multiple times.
function myname() {
  console.log("hello everyone i ma sandip how you doing ?");
  console.log("everyone loving going to shop and buy some new clothes!");
}
myname(); //lastly call the name

//another with parameter function//
function hello(message) {
  //in this line message is a input or parameter
  console.log(message);
}
hello("I am learning web development and enjoy it ."); //message type here and function name is hello calling and its call
//arguement

function sum(a, b) {
  console.log(a + b);
}
sum(4, 5);
//---------------
function numbers(v, b) {
  let h = v + b;
  return h;
}
let coming = numbers(6, 7);
console.log(coming);
//-----------------
function name(sus, aus) {
  let mero = sus * aus;
  return mero;
}
let now = name(38, 78);
console.log(now);
//-----------
function calculate(even, odd) {
  let both = even + odd;
  return both;
}
let result = calculate(400, 700);
console.log(result);
//function ko parameter ma function ko block scope huncha tehi block scope samma mattra alive huncha //tesbata
//bahira bachdaina
