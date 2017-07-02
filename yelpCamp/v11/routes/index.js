var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user");

// root route
router.get("/", function(req, res) {
	res.render("landing");
});

//AUTH ROUTES

//passport.authenticate() is the same method used in sign up and login
//the difference is that in the sign up method, we're doing a bunch of things
//before calling passport.authenticate():
//we're creating a new user, and if that works, we're logging that new user in
//vs for login the user is presumed to exist already, 
//so we only try to log them in

//show register form
router.get("/register", function(req, res) {
  res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res) {
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
    if(err) {
      return res.render("register", {"error": err.message});
    }
    passport.authenticate("local")(req, res, function() {
      req.flash("success", "Welcome to YelpCamp " + user.username);
      res.redirect("/campgrounds");
    });
  });
});

//show login form
router.get("/login", function(req, res) {
  res.render("login");
});

//handle login logic
//app.post("/logic", middleware, callback)
router.post("/login", passport.authenticate("local", 
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res) {
  
});

//log out route
router.get("/logout", function(req, res) {
  //we get logout() for free from passport, so this code is very simple
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/campgrounds");
});


module.exports = router;