//string methods//

//touppercase//
// let str1 = "sagarmatha himal";
// console.log(str1.toLocaleUpperCase());
let str1 = "sagarmatha himal";
str1.toLocaleUpperCase();
console.log(str1); //yo 3 step garda sagarmatha himal print huncha but uppercase ma hudaina original ma juncha
//string method le original value lai change gardaina but new string value return garcha variable ma store or console ma
//str1.uppercase garda change huncha // immutable
let str2 = "sagarmatha himal";
let newStr2 = str2.toLocaleUpperCase(); //yesari new variable ma store garney value pani new banaucha change huncha//
console.log(str2); //original
console.log(newStr2); //uppercase

let str3 = "my name is sandip";
str3 = str3.toLocaleUpperCase();
console.log(str3);

//tolowercase//

let str4 = "MY NAME IS SANDIP";
str4 = str4.toLocaleLowerCase();
console.log(str4);

let str5 = "SAGARMATHA HIMAL";
let newStr5 = str5.toLocaleLowerCase(); //yesari new variable ma store garney value pani new banaucha change huncha//
console.log(str5); //original
console.log(newStr5);

//trim//
//starting and end part space remove trim//
let str = "    my name is sandip    ";
console.log(str.trim());
