// Higher Order Functions
function sing() {
  console.log("twinkle twinkle...");
  console.log("how I wonder...");
}

//setInterval(anotherFunc, interval);
//executes function "anotherFunc" repeatedly every interval ms
setInterval(sing, 1000);

//setInterval returns num
//calling clearInterval with num with stop setInterval from calling anotherFunc
clearInterval(num);

//using an anonymous function
setInterval(function() {
  console.log("I am an anonymous function!");
  console.log("Hello world!");
}, 2000);