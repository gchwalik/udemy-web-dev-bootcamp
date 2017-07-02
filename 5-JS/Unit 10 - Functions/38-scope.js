// Intro to JS Scope
// Scope is that context that code is executed in

function doMath() {
  var x = 40;
  console.log(x);
}

x     //Undefined, error

----

var y = 99;

function doMoreMath() {
  console.log(y);
}

doMoreMath()    //99

---- 

var y = 99;

function doMathAgain() {
  y = 100;
  console.log(y);
}

y                 //99
doMathAgain()     //100
y                 //100

----

var phrase = "hi there";
function doSomething() {
  var phrase = "Goodbye!";
  console.log(phrase);
}

phrase        //hi there
doSomething   //Goodbye!
phrase        //hi there
