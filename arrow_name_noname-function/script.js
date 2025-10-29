//arrow function//
//arrow function making function codes short and clean
const sum = (a, b) => {
  return a + b;
};
sum(4, 6);

const multi = (s, y) => {
  return s * y;
};
multi(5, 9);

//practice
function numbers(numb) {
  let count = 0;
  for (let char of numb) {
    if (
      char === "1" ||
      char === "2" ||
      char === "3" ||
      char === "4" ||
      char === "5"
    ) {
      count++;
    }
  }
  return count;
}

//arrow function
const countNumbs = (even) => {
  function numbers(numb) {
    let count = 0;
    for (let char of numb) {
      if (
        char === "1" ||
        char === "2" ||
        char === "3" ||
        char === "4" ||
        char === "5"
      ) {
        count++;
      }
    }
    return count;
  }
};
console.log(countNumbs(345627));

// // name function

// function add() {
//   console.log("function hello world");
//   console.log("1st hello world");
//   console.log("2nd hello world");
// }
// add();

// // no name function

// const add2 = function () {
//   console.log("function hello world");
//   console.log("1st hello world");
//   console.log("2nd hello world");
// };

// add2();
// //arrow function

// const add3 = () => {
//   console.log("function hello world");
//   console.log("1st hello world");
//   console.log("2nd hello world");
// };
// add3();
