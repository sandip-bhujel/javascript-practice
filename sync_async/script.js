//synchronous どうきしより is code run in a particular sequence of instruction mean one by one code run //
//asynchronous is　ひどうきしより sometime blocked due to some previous
// instruction mean its not a wait in code its run to jump another code//

console.log("one");
console.log("two");

function hello() {
  console.log("hello");
}

setTimeout(hello, 4000); //timeout  2ms = 2000 yo aba timeout bhayekole after 4 sec ma
//  hello print huncha consolema
console.log("three");
console.log("four");
//these are console.log is not wait to code it s a printout together

//asynchronous//
