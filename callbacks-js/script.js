//callback is a function passing the arguements to another function //
function sum(a, b) {
  console.log(a + b);
}

function number(a, b, sumCallback) {
  sumCallback(a, b);
}

number(1, 2, sum); //function bhitra sum srguement pass gareko //
//output 3

//-----------------------------------------

//callback hell//
//callback hell is a like nested one fuction inside another function calling //

function getDatastore(dataId) {
  //3s output showing
  setTimeout(() => {
    console.log("data", dataId);
  }, 3000); //3000 is a 3 sec
}
//you can type on console getDatastore(3455) any numbers 45376 367  then show after 3 secs

//hamilai three type data need vayo /
//data 1
//data 2
//data 3  ekpayepachi arko then next like this

getDatastore(1);
getDatastore(2);
getDatastore(3);

// function getDatastore(dataId, getNewdata) {
//   //3s output showing
//   setTimeout(() => {
//     console.log("data", dataId);
//     getNewdata();
//   }, 3000); //3000 is a 3 sec
// }

// getDatastore(1, () => {
//   getDatastore(2);
// });

//callbackhell//
getDatastore(1, () => {
  console.log("getting data1 ");
  getDatastore(2, () => {
    console.log("getting data2");
    getDatastore(3, () => {
      console.log("getting data 3");
    });
  });
});
//nested
