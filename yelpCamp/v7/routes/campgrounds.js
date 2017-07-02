var express = require("express");
var Campground = require("../models/campground");

var router = express.Router();

//INDEX - show all campgrounds
router.get("/", function(req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
	  if(err) {
	    console.log(err);
	  }
	  else {
	    //we also get the current logged in user for free from passport with req.user
	    res.render("campgrounds/index", {campgrounds: allCampgrounds});
	  }
	});
});

//CREATE - add new campground to database
router.post("/", function(req, res) {
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
      res.redirect("/");      
    }
  });
});

//NEW - show form to create new campground
router.get("/new", function(req, res) {
  res.render("campgrounds/new");	
});

//SHOW - Shows more ino about one campground
router.get("/:id", function(req, res) {
  //find the campground with provided ID
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
    if(err) {
      console.log(err);
    }
    else {
      console.log(foundCampground);
      //render show template with campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

module.exports = router;