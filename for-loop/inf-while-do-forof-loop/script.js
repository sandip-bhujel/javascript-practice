//infinite loof is never stop continue
//stoping condition not false

//print 1 to 5

//for (let i = 1; i >= 0; i++)
// console.log("i");

//while loop// while loop same like for loop  (condition starting ma check huncha )
let i = 1;
while (i <= 4) {
  console.log("i");
  i++;
}

//do-while loop// (condition last ma check huncha)
let x = 10;
do {
  console.log("hello world");
  x++;
} while (x <= 6);
//yesko last ma semi colon huncha

//for of loop //
//string ra arrays ma loop lagauna kaam aucha//

let name = "hello world";
for (let i of name) {
  console.log("i =", i);
}

let myName = " sandip bhujel";
for (let i of myName) {
  console.log("i =", i);
}

let num = [1, 2, 3, 4]; //num iterate nabhayeko le yeslai array ma lekheko --array , string ,map haru use huncha
for (let i of num) {
  console.log("i =", i);
}
