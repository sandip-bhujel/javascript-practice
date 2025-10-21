//push// end ko item add garna help gardacha ..can multiples
let vegetables = ["potatos", "pumpkin", "carrots", "tomatos", "green-leaf"];
vegetables.push("mango"); //yesma jamti pani multiple add garna milcha , carrots,eggplants,cucumbers,onion
console.log(vegetables);
//pop//
let fruits = ["mango ", "orange", "kiwi", "litchi"];
let delet = fruits.pop(); //last item delete bhayo
console.log(fruits); //mango , orange , kiwi

//tostring//
let peoples = ["man", "human", "girl", "boy", "women"];
console.log(peoples);
console.log(peoples.toString());

let css = ["flex", "grid", "float", "position", "keyframe"];
console.log(css);
console.log(css.toString());

//concat in array
let nepali_rivers = [
  "marsyangdi",
  "kaligandaki",
  "bagmati",
  "karnali",
  "bheri",
];
let khola = ["koshi", "seti"]; // this line rivers also add there all totals
let allKholas = nepali_rivers.concat(khola); //all total concating
console.log(allKholas); //print all rivers//

//sift method// delet start item from collection
let songs = ["pop", "folk", "rock", "hip-pop"];

songs.shift(); //first is pop is deleted//
console.log(songs); //print without pop

//unshift method// add to start point its like push  is last but this is starting
let html = ["div", "span", "para", "tag", "void"];
html.unshift("explanation mark"); //explanation mark is added in starting point
console.log(html); //print all collection of html

//slice//
let currency = ["indian", "nepali", "japanese", "USA", "chinese"];

console.log(currency);
console.log(currency.slice(1, 4));

//splice// add remove delete // starting index take then
let a = [1, 2, 3, 4, 5, 6];
//add
a.splice(2, 0, 15); //0 item delete after 2 add 15
console.log(a);

//delete//
a.splice(3, 1);
console.log(a);

//replace//
a.splice(4, 1, 90);
console.log(a);

//question//
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
//remove first company //
let del = companies.shift();
console.log(companies);
//remove the uber and replace the wolt//
companies.splice(2, 1, "wolt");
console.log(companies);
//end ma item add amazon//
companies.push("amazon");
console.log(companies);
