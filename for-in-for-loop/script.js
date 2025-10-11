let guessNumber = "30";

let userNumber = prompt("Guess the correct number:");
while (userNumber != guessNumber) {
  //while (userNumber !== guessNumber) {
  userNumber = prompt("You enter the wrong number guess again:");
}
console.log("congratulations, you entered the right number");
