3 Main Objectives

Objective 1: Write function declarations and function expressions
Objective 2: Explain the difference between console.log and return
Objective 3: Definte functions that take multiple arguments

Will also talk about:
- scope
- higher order functions

----

Objectives
- Understand why we use functions
- Define a function without arguments
- Define a function with arguments
- Return a value from a function

----

Functions
Functions let us wrap bits of code up into REUSABLE packages.
They are one of the building blocks of JS

Declare a function first:
  function doSomething() {
    console.log("HELLO WORLD");
  }

Then call it:
  doSomething();
  doSomething();
  doSomething();
  doSomething();

----

If in the console, you type
  doSomething();
it'll return for you
  HELLO WORLD

If you type"
  doSomething
it'll return
  function doSomething() {
    console.log("HELLO WORLD");
  }

----

Arguments

Often we want to write functions that take inputs.
  function square(num) {
    console.log(num * num);
  }

Now when we call square() we need to pass in a value
  square(10);   //prints 100
  square(3);    //prints 9
  square(4);    //prints 16

----

function sayHello() {
  console.log("Hello there!");
}

To call:
  sayHello()

function sayHello(name) {
  console.log("Hello there " + name + "!");
}

To call:
  sayHello("Rusty");

If just use
  sayHello(Rusty);

will throw an error, because Rusty (the variable) is not defined

----

Functions can have as many arguments as needed

function area(length, width) {
  console.log(length * width);
}
area(9,2);    //18

function greet(person1, person2, person3) {
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("Harry", "Ron", "Hermione");
Outputs
  hi Harry
  hi Ron
  hi Hermione

greet("Harry", "Ron");
Outputs
  hi Harry
  hi Ron
  hi undefined

----

The Return Keyword

Often we want a function to send back an output value

Input -> [ Function ] -> Output

function square(x) {
  return x*x;
}

"4 squared is: " + square(4);

Outputs:
  "4 squared is: 16";

var result = square(10);
result

Outputs
  100

----

Every function returns something, and if we don't specify,
it just returns undefined.

----

//this function capitalizes the first char in a string:
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";               //"paris"
var capital = capitalize(city);   //"Paris"

----

//The return keyword stops execution of a function
function capitalize(str) {
  if(typeof str === "number") {
    return "that's not a string!";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";               //"paris"
var capital = capitalize (city);  //"Paris"

var num = 37;
var capital = capitalize(num);    //"that's not a string!"

----

Function Declaration vs. Function Expression

//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) { 
  return str.charAt(0).toUpperCase() + str.slice(1);
}

