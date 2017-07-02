var express = require("express");
var Campground = require("../models/campground");

//if we just require a directory, the framework automatically imports
//the contents of the index.js file
var middleware = require("../middleware/");

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
router.post("/", middleware.isLoggedIn, function(req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  
  var newCampground = {name: name, image: image, description: desc, author: author};
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
router.get("/new", middleware.isLoggedIn, function(req, res) {
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
      //render show template with campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

//EDIT CAMPGROUND ROUTE - form
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err) {
      console.log(err);
    }
    else {
      res.render("campgrounds/edit", {campground: foundCampground});
    }
  });
});

//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  //find and update the correct campground
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
    if(err) {
      res.redirect("/campgrounds");
    }
    else {
      //redirect somewhere (show page)
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect("/campgrounds");
    }
    else {
      res.redirect("/campgrounds");
    }
  });
});


//middleware!
// function isLoggedIn(req, res, next) {
//   if(req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }

// function checkCampgroundOwnership(req, res, next) {
//   //is user logged in at all
//   if(req.isAuthenticated()) {
//     Campground.findById(req.params.id, function(err, foundCampground) {
//       if(err) {
//         res.redirect("back");
//       }
//       else {
//         //does user own the campground
//         //foundCampground.author.id is a js/mongoose object
//         //req.user._id is a String
//         //can't compate these with ===, and instead use equals()
//         if(foundCampground.author.id.equals(req.user._id)) {
//           next();
//         }
//         else {
//           //otherwise, redirect
//           res.redirect("back");      
//         }
//       }
//     });
//   }
//   else {
//     //take user back to the previous page they were on
//     res.redirect("back");
//   }
// }

module.exports = router;