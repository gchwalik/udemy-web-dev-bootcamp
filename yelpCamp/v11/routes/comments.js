var express = require("express");
var router = express.Router({mergeParams: true});

//if we just require a directory, the framework automatically imports
//the contents of the index.js file
var middleware = require("../middleware/");

var Campground = require("../models/campground"),
    Comment = require("../models/comment");


// NEW - show form to create new comment
router.get("/new", middleware.isLoggedIn, function(req, res) {
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

//CREATE comment
router.post("/", middleware.isLoggedIn, function(req, res) {
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
          req.flash("error", "Something went wrong");
          console.log(err);
        }
        else {
          //add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          
          //connect new comment to campground
          campground.comments.push(comment);
          campground.save();

          req.flash("success", "Successfully added comment");
          //redirect to campground show page
          res.redirect('/campgrounds/' + campground._id);
        } //else
      }); //Comment.create()
    } //else
  }); //Campground.findById()
});

//EDIT COMMENT - display form
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
  Comment.findById(req.params.comment_id, function(err, foundComment) {
    if(err) {
      res.redirect("back");
    }
    else {
      res.render("comments/edit", {campgroundId: req.params.id, comment: foundComment});
    }
  });
});

//UPDATE COMMENT
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
    if(err) {
      res.redirect("back");
    }
    else {
      res.redirect("/campgrounds/" + req.params.id );
    }
  });
});

//DESTROY COMMENT
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if(err) {
      console.log("error");
      res.redirect("back");
    }
    else {
      req.flash("success", "Comment deleted")
      res.redirect("/campgrounds/" + req.params.id);
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

// function checkCommentOwnership(req, res, next) {
//   //is user logged in at all
//   if(req.isAuthenticated()) {
//     Comment.findById(req.params.comment_id, function(err, foundComment) {
//       if(err) {
//         res.redirect("back");
//       }
//       else {
//         //does user own the comment
//         //foundComment.author.id is a js/mongoose object
//         //req.user._id is a String
//         //can't compate these with ===, and instead use equals()
//         if(foundComment.author.id.equals(req.user._id)) {
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