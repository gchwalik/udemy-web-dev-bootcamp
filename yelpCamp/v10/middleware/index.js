//all the middleware goes here
var Campground = require("../models/campground"),
    Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
  //is user logged in at all
  if(req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, foundCampground) {
      if(err) {
        res.redirect("back");
      }
      else {
        //does user own the campground
        //foundCampground.author.id is a js/mongoose object
        //req.user._id is a String
        //can't compate these with ===, and instead use equals()
        if(foundCampground.author.id.equals(req.user._id)) {
          next();
        }
        else {
          //otherwise, redirect
          res.redirect("back");      
        }
      }
    });
  }
  else {
    //take user back to the previous page they were on
    res.redirect("back");
  }
};


middlewareObj.checkCommentOwnership = function(req, res, next) {
  //is user logged in at all
  if(req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
      if(err) {
        res.redirect("back");
      }
      else {
        //does user own the comment
        //foundComment.author.id is a js/mongoose object
        //req.user._id is a String
        //can't compate these with ===, and instead use equals()
        if(foundComment.author.id.equals(req.user._id)) {
          next();
        }
        else {
          //otherwise, redirect
          res.redirect("back");      
        }
      }
    });
  }
  else {
    //take user back to the previous page they were on
    res.redirect("back");
  }
};

middlewareObj.isLoggedIn = function(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

module.exports = middlewareObj;


//could also do the following to define the middleware
// module.exports = {
//   ... all functions here	
// }