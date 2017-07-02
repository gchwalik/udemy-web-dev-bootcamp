var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//images from http://www.photosforclass.com/
var campgrounds = [
  {name: "Salmon Creek", image: "http://www.photosforclass.com/download/4369518024"},
  {name: "Granite Hill", image: "http://www.photosforclass.com/download/4684194306"},
  {name: "Mountain Goat's Rest", image: "http://www.photosforclass.com/download/14516859921"},
  {name: "Salmon Creek", image: "http://www.photosforclass.com/download/4369518024"},
  {name: "Granite Hill", image: "http://www.photosforclass.com/download/4684194306"},
  {name: "Mountain Goat's Rest", image: "http://www.photosforclass.com/download/14516859921"},
  {name: "Salmon Creek", image: "http://www.photosforclass.com/download/4369518024"},
  {name: "Granite Hill", image: "http://www.photosforclass.com/download/4684194306"},
  {name: "Mountain Goat's Rest", image: "http://www.photosforclass.com/download/14516859921"},
  {name: "Salmon Creek", image: "http://www.photosforclass.com/download/4369518024"},
  {name: "Granite Hill", image: "http://www.photosforclass.com/download/4684194306"},
  {name: "Mountain Goat's Rest", image: "http://www.photosforclass.com/download/14516859921"}

];

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");	
});

app.post("/campgrounds", function(req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);

  //redirect back to campgrounds page
  //default is to redirect with a GET requests
  res.redirect("/campgrounds");
});



app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is listening");
});