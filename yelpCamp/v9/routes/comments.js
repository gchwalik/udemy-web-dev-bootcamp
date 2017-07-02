var express = require("express");
var router = express.Router({mergeParams: true});

var Campground = require("../models/campground"),
    Comment = require("../models/comment");


// NEW - show form to create new comment
router.get("/new", isLoggedIn, function(req, res) {
  //find campground by id
  Campground.findById(req.params.id, function(err, campground) {
    if(err) {
      console.log(err);
    }
    else {
      res.render("comments/new", {campground: campground});
    }
  });
});

//create comment
router.post("/", isLoggedIn, function(req, res) {
  //lookup campground using id
  Campground.findById(req.params.id, function(err, campground) {
    if(err) {
      console.log(err);
      res.redirect("/campgrounds");
    }
    else {
      //create new comment
      Comment.create(req.body.comment, function(err, comment) {
        if(err) {
          console.log(err);
        }
        else {
          //add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          
          console.log(comment);
          //connect new comment to campground
          campground.comments.push(comment);
          campground.save();

          //redirect to campground show page
          res.redirect('/campgrounds/' + campground._id);
        } //else
      }); //Comment.create()
    } //else
  }); //Campground.findById()
});

//middleware!
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

module.exports = router;