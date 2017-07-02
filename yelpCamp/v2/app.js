var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/yelp_camp_v2");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill", 
//     image: "http://www.photosforclass.com/download/4684194306",
//     description: "This is a huge granite hill, no bathrooms. No water. Beutiful granite!"
//   }, function(err, campground) {
//     if(err) {
//       console.log(err);
//     }
//     else {
//       console.log("newly created campground");
//       console.log(campground);
//     }
//   });

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

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
	  if(err) {
	    console.log(err);
	  }
	  else {
	    res.render("index", {campgrounds: allCampgrounds});
	  }
	});
});

//CREATE - add new campground to database
app.post("/campgrounds", function(req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};

  //Create new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if(err) {
      console.log(err);
    }
    else {
      //redirect back to campgrounds page
      //default is to redirect with a GET requests
      res.redirect("/campgrounds");      
    }
  });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");	
});

//SHOW - Shows more ino about one campground
app.get("/campgrounds/:id", function(req, res) {
  //find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err) {
      console.log(err);
    }
    else {
      //render show template with campground
      res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is listening");
});