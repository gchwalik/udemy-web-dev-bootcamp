var express = require("express");
var app = express();


// "/" => "Hello"
app.get("/", function(req, res) {
  res.send("Hello"); 
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res) {
  res.send("Goodbye");
});

// "/dog" =? "meow"
app.get("/dog", function(req,  res) {
	console.log("dog request");
	res.send("meow");
});

app.get("/r/:subredditName", function(req, res) {
	res.send("welcome to the " + req.params.subredditName + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
	res.send("comments");
});

//* is for all other URLs
app.get("*", function(req, res) {
	res.send("please go to home");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server has started");
});