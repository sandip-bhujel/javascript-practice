//prototype//
//object banauda //
const student = {
  fullName: "hari ram shrestha ",
  address: "katmandu dharahara",
  marks: 78.4,
  studentMarks: function () {
    console.log("marks = ", this.marks); //this. means object variable ho like student is object variable so this is student //
    //direct access garna sakidaina so this use garera
  },
};
student.fullName;

const employee = {
  calculateTax() {
    console.log("tax rate is 15%");
  },
};

const ramHari = {
  salary: 40000,
};
