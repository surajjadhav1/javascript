var today1 = new Date();

// if (today1.getHours() > 12) {
//   document.querySelector("#period").innerHTML = "PM";
//   document.querySelector("#period").style.backgroundColor = "#0000ff";
// }

setInterval(() => {
  var today3 = new Date();
  document.querySelector("#hour").innerHTML = today3.getHours();
  document.querySelector("#minutes").innerHTML = today3.getMinutes();
  document.querySelector("#seconds").innerHTML = today3.getSeconds();
}, 1000);
