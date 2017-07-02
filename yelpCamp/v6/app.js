var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user");
    
var Campground = require("./models/campground"),
    Comment = require("./models/comment");

var seedDB = require("./seeds");

var app = express();

mongoose.connect("mongodb://localhost/yelp_camp_v6");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
//__dirname refers to the dir this script is run from
app.use(express.static(__dirname + "/public"));

seedDB();

//passport configuration
app.use(require("express-session")({
  secret: "Rusty is the cutest dog",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//this is a middleware where whatever we provide to it will be called on every route
//whatever we put inside "res.locals" is available inside our template 
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//ROUTES

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
	    //we also get the current logged in user for free from passport with req.user
	    res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
  res.render("campgrounds/new");	
});

//SHOW - Shows more ino about one campground
app.get("/campgrounds/:id", function(req, res) {
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

//=================
// COMMENTS ROUTES
//=================

// NEW - show form to create new comment
app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
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

app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res) {
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


//AUTH ROUTES

//passport.authenticate() is the same method used in sign up and login
//the difference is that in the sign up method, we're doing a bunch of things
//before calling passport.authenticate():
//we're creating a new user, and if that works, we're logging that new user in
//vs for login the user is presumed to exist already, 
//so we only try to log them in

//show register form
app.get("/register", function(req, res) {
  res.render("register");
});

//handle sign up logic
app.post("/register", function(req, res) {
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
    if(err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect("/campgrounds");
    })
  });
});

//show login form
app.get("/login", function(req, res) {
  res.render("login");
});

//handle login logic
//app.post("/logic", middleware, callback)
app.post("/login", passport.authenticate("local", 
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res) {
  
});

//log out route
app.get("/logout", function(req, res) {
  //we get logout() for free from passport, so this code is very simple
  req.logout();
  res.redirect("/campgrounds");
});

//middleware!
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is listening");
});