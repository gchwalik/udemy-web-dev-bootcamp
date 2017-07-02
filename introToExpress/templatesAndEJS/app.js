var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
//  res.send("<h1>Welcome to the home page</h1><h2>blah blah</h2>");
  res.render("home.ejs");
});

app.get("/love/:thing", function(req, res) {
	var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  var posts = [
  	{title : "Post 1", author: "Susy"},
  	{title : "Post 2", author: "Charlie"},
  	{title : "Post 3", author: "Colt"}
  ];
  
  res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is listening");
});