function myForEach(arr, func) {
  for(var i=0; i<arr.length; i++) {
    func(arr[i], i);
  } 
}

colors = ["red", "orange", "yellow"];

myForEach(colors, function(color) {
  console.log(color);
});

//****

Array.prototype.myForEach = function(func) {
  for(var i=0; i<this.length; i++) {
    func(this[i], i);
  }
}

var friends = ["charlie", "dave", "maddy", "caitlin"];

friends.myForEach(function(name) {
  console.log("I love " + name);
})