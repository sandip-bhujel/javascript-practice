//slice//
//return parts of the strings// str.slice(start or end)?
//ending value include hudaina start and tyo pachadiko include bhayera aucha //
let str = "japantokyo";
console.log(str.slice(2, 5));

let str2 = "01234567";
console.log(str2.slice(2, 6)); //6 include hudaina but its a end number

let str3 = "hamroghar";
console.log(str3.slice(4)); //yesma single cha but tyo single and others sabai include huncha

// concat//
//strings plus garna use huncha
let str1 = "my name is ";
let str5 = "sandip";
let result = str1.concat(str5);
console.log(result);
//another using + also
let str4 = "my name is ";
let str6 = "sandip";
let res = str4 + str6;
console.log(res);

// replace//  value ma search garna use garincha
let name = "ram bahadur thaile";
console.log(name.replace("ram", "shyam"));
//replace jun replace garna chaheko ra kun rakhna chaheko tyo replace ko bracket ma rakhney //
//ram ko ko thauma replace shyam garna lagayeko //
let person = "many peoples are there?";
console.log(person.replace("many", "how many")); //many ko thauma how many gareko

// charAt//
let str9 = "hellojavascript";
console.log(str9.charAt(5)); //j  // character search garna ko lagi

//practice question//
// let fullName = prompt("Enter your fullname without spaces ");
// console.log(fullName);
let fullName = prompt("Enter your fullName without spaces");
console.log(fullName);
let userName = "@" + "fullName" + fullName.length;
console.log(userName);
