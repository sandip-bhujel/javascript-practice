//basic using if else and switch 2-2 example practice check positive and negative number //
//if else//
let number = -2;
if (number > 0) {
  //   console.log(number + "this is a positive number ");
  console.log(`${number} is a positive number `);
  // } else if (number < 0) {
  //   console.log(number + "this is a negagtive number");----conacating yo pani ho --
  console.log(`${number} this is a negative number.`); //----concating yesari gareko best
} else {
  console.log("the number is nothing ");
}

//---------------
let point = 6;
if (point > 0) {
  //   console.log(point + "this is a positive number");
  console.log(`${point} this is a positive number. `);
} else if (point < 0) {
  //   console.log(point + "this is a negative number ");
  console.log(`${point} this is a negative number.`); //-------concating with bactick
} else {
  console.log("this number is nothing");
}

//switch statement //

let pointed = 3;
switch (true) {
  case pointed > 0:
    {
      console.log(`${pointed} this is a positive number.`);
    }
    break;
  case pointed < 0:
    {
      console.log(`${pointed} this is a negative number.`);
    }
    break;
  default:
    console.log("the number is not here");
}

// -----------------
let num = -2;
switch (true) {
  case num > 0:
    {
      console.log(`${num} this is positive number.`);
    }
    break;
  case num < 0:
    {
      console.log(`${num} this is a negative number.`);
    }
    break;
  default:
    console.log("the number is not available");
}
