// Arrays come with a fre built-in methods that make our
// life easier. We're going to cover:
// - push/pop
// - shift/unshift
// - indexOf
// - slice

//----

// Push and Pop
// Use push to add to the end of an array:
// (push retrurns the length of the array after the push)
var colors = ["red", "orange", "yellow"];
colors.push("green");     //["red", "orange", "yellow", "green"]

// Use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop();   //["red", "orange"];

// pop() returns the removed element
var col = colors.pop();   //orange

//----

// Shift and Unshift
// Use unshift to add to the front of the array
// (unshift returns the length of the array after the "push")
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");    //["infrared", "red", "orange", "yellow"];

// Use shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();       // [orange", "yellow"];

//shift() also returns the removed element
var col = colors.shift();   //orange

//----

// IndexOf
// Use indexOf() to find the index of an item in an array
var friends = ["A", "B", "C", "D", "B"];

//returns the first index at which a given element can be found
friends.indexOf("C");   //2
friends.indexOf("B");   //1

//returns -1 if the element is not present
friends.indexOf("X");   //-1

//----

// Slice
// Use slice() to copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// use slice to copy the 2nd and 3rd furits
// specify index where the new array starts(1) and ends(3) (non-inclusive)
var citrus = fruits.slice(1,3);

// this does not alter the original fruits array
// citrus contains ["Organge", "Lemon"]
// fruits contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
// both arrays are [1,2,3]

