var express = require("express");
var app = express();

//routes
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
  }  
  
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];

  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:num", function(req, res) {
  var word = req.params.word;
  var bound = Number(req.params.num);
  
  var string = "";
  
  for(var i=0; i<bound; i++) {
    string += word + " ";
  }
  
  res.send(string);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server has started");
});