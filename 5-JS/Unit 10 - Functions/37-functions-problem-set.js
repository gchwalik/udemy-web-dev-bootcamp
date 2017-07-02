// Write a function isEven() which takes a single numeric argument
// and returns true if the number is even, and false otherwise
//
// isEven(4);   //true
// isEven(21);  //false
// isEven(68);  //true
// isEven(333); //false

function isEven(num) {
  // if(num % 2 === 0) {
  //   return true;
  // }
  // else return false;

  return num % 2 === 0;
}

// Write a function factorial() which takes a single numeric argument
// and returns the factorial of that number
//
// 4! is 4 x 3 x 2 x 1
// 6! is 6 x 5 x 4 x 3 x 2 x 1 
// 0! is 1

function factorial(num) {
  // if(num < 0 || typeof num !== "number") {
  //   return "error";
  // }
  // else {
  //   var val = 1;
  //   while(num > 0) {
  //     val = val*num;
  //     num--;
  //   }
  //   return val;
  // }

  var result = 1;

  for(var i=2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Write a function kebabToSnake() which takes a single kebab-cased
// string argument and returns the snake_case version.

function kebabToSnake(str) {
  // var return_str = "";
  // for(var i=0; i<str.length; i++) {
  //   if(str[i] === "-") {
  //     return_str = return_str + "_";
  //   }
  //   else {
  //     return_str = return_str + str[i];
  //   }
  // }
  // return return_str;

  var newStr = str.replace(/-/g, "_");
  return newStr;
}

