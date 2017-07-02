var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    methodOverride = require("method-override"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user");
    
//requiring models/schemas    
var Campground = require("./models/campground"),
    Comment = require("./models/comment");

//requiring routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes = require("./routes/index");

//seed the database with dummy data
// var seedDB = require("./seeds");

var app = express();

mongoose.connect("mongodb://localhost/yelp_camp_v12");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
//__dirname refers to the dir this script is run from
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

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
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

//ROUTES
// parm "/campgrounds" indicates that all campground routes should be 
// prepended with "/campgrounds". In this way we can DRY up our campgrounds.js
app.use("/", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is listening");
});