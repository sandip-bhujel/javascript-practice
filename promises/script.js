//promises//
//promise is for solution of callbackhell //
//promises//

//

let promise = new promise((resolve, reject) => {
  // resolve ma work complete vayo vane success and reject ma complete
  //bhayo bhane fulfill huncha but error aucha
  console.log("I am a promise");
});

function getData(dataId, getNextData) {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    });
  });
}
