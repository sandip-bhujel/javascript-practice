// //multiple of 6//
// let number = prompt("Enter a correct number");

// // //check the multiple numbers with 6
// if (number % 6 === 0) {
//   console.log(number, "correct number of multiple 6");
// } else {
//   console.log(number, "wrong number");
// }

// // //multiple of 3//

// let num = prompt("choose the one number");
// //number is multiple 3//
// if (num % 3 === 0) {
//   alert("correct number good");
// } else {
//   alert("not correct your number");
// }

//grades of student by score //
//A grade is 90-100 , B grade is 70-80, C grade is 60-75, D grade is 50-55 , fail is 10-40

let score = 30; // we can change here many score for practicing //
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "fail";
}
console.log("acording to your score result of grade: " + grade);

let score2 = 50;
let grade2;
if (score > 100 || score < 0) {
  grade = "Invalid score ";
} else if (score > 90) {
  grade = "A";
} else if (score > 80) {
  grade = "B";
} else if (score > 70) {
  grade = "C";
} else if (score > 60) {
  grade = "D";
} else {
  grade = "fail";
}
console.log(`Acording to your score result :${grade} `);
