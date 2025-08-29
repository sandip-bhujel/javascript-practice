//nested if making username and password check//
let username = "bhujel sandip"; // its real admin put username
let password = "hello 34"; // admin put real password

//then customer want to try this//
let entereduser = "bhujel bahadur";
let enteredpass = "hello33";

if (entereduser === username) {
  if (enteredpass === password) {
    console.log("login successful !");
  } else {
    console.log("wrong password !");
  }
} else {
  console.log("wrong username");
}
//-------------------------------------
let username2 = "mero ghar";
let password2 = "2345";
let entereduser2 = "myhome ho";
let enteredpass2 = "7893";
if (entereduser2 === username2) {
  if (enteredpass2 === password2) {
    console.log("login successful !");
  } else {
    console.log("wrong password !");
  }
} else {
  console.log("wrong username !");
}
