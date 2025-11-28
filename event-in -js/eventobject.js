//event object is all event handlers have access to the event objects properties and methods.//
btn1.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  //   console.log("btn1 was clicked");
  //   let a = 33;
  //   a;
  //   a++;
  //   console.log(object);
};
