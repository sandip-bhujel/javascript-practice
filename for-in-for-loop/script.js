//for in loop//
let person = {
  name: "hari bahadur lyangre",
  age: 35,
  height: 5.6,
  address: "kathmandu todke tole",
  job: "halliney kaam",
};
//use  for in lop //
for (let key in person) {
  console.log("key =", key, "value =", person[key]);
}

//key value pairs//

let building = {
  bldName: "sarthara tower",
  madeBy: "concrit",
  date: "1999 - 12",
  color: "black & blue",
  area: 1256,
  city: "droctoj-city",
};
for (let key in building) {
  console.log("key=", key, "value =", building[key]);
}

//questions //
//pint the all even numbers 0 to 50

//just print here 0 to 50 numbers //
for (let num = 0; num <= 50; num++) {
  console.log("num=", num);
}

//now print only even numbers // odd number dont print

for (let num = 0; num <= 50; num++) {
  if (num % 2 === 0) {
    console.log("num =", num);
  }
}

//if we do here in module not equal to print odd number !==
for (let num = 0; num <= 50; num++) {
  if (num % 2 !== 0) {
    console.log("num =", num);
  }
}
