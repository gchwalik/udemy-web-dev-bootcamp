//Write a function printReverse() that takes an array as an argument
//and prints out the elements in the array in reverse order (don't
//actually reverse the array itself)

function printReverse(array) {
  for(var i=array.length-1; i>=0; i--) {
    console.log(array[i]);
  }
  console.log("");
}

printReverse([1,2,3,4]);        //4, 3, 2, 1
printReverse(["a","b","c"]);    // c, b, a

//Write a function isUniform() which takes an array as an argument
//and returns true is all elements in the array are identical
function isUniform(array) {
  var first = array[0];
  // var value = true;

  // array.forEach(function(item) {
  //   if(first !== item) {
  //     value = false;
  //     return;
  // });
  // console.log(value);

  for(var i=1; i<array.length; i++) {
    if(array[i] !== first) {
      return false;
    }
  }
  return true;
}

isUniform([1,1,1,1]);       //true
isUniform([2,1,1,1]);       //false
isUniform(["a","b","p"]);   //false
isUniform(["b","b","b"]);   //true

console.log("");

//Write a function sumArray() that accepts an array of numbers and
//returns the sum of all numbers in the array
function sumArray(array) {
  var total = 0;
  array.forEach(function(num) {
    total+=num;
  });
  return total;
}

sumArray([1,2,3]);        //6
sumArray([10,3,10,4]);    //27
sumArray([-5,100]);       //95

console.log("");

//Write a function max() that accepts an array of numbers and
//returns the maximum number in the array
function max(array) {
  var max = array[0];

  array.forEach(function(item) {
    if(item > max) {
      max = item;
    }
  });
  return max;
}

max([1,2,3]);       //3
max([10,3,10,4]);   //10
max([-5,100]);      //100