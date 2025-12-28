//class is code of template creat a objects//
//those object will have some state variable  and behavior function inside
class yamahaBike {
  constructor(brand, speed) {
    console.log("creating new object");
    this.brand = brand;
    this.speed = speed;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brand = brand; //this mean object function call
  }
}

let honda = new yamahaBike("honda", 250); // constructor
console.log(honda);
let hero = new yamahaBike("hero", 300); //hero vittra sabai yamahabike ko detail save hunecha // constructor
console.log(hero);

//constructor // in javscript automatically create constructor
