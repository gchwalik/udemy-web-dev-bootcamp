var obj = {
  name: "Johnson",
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y) {
    return x + y;
  }
}

obj.add(2,3);   //5

//This is similar to console.log()
//console is an object, and log() is a method on that object

//Why would you add a method to an object, rather than 
//defining it by itself?
// - keeps your code more organized/logically together
// - used to avoid namespace collisions (where things have same name)

var dogSpace = {};
dogSpace.speak = function() {
  return "WOOF!"; 
}

var catSpace = {};
catSpace.speak = function() {
  return "MEOW!";
}


var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];
comments.print = function(arr) {
  arr.forEach(function(el) {
    console.log(el);
  });
}