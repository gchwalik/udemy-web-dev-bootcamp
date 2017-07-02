var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    passportLocalMongoose = require("passport-local-mongoose"),
    LocalStrategy = require("passport-local");

var User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set('view engine', 'ejs');
//need this line anytime we're using a form and posting data to a request
app.use(bodyParser.urlencoded({extended: true}));

//inline declaration of a require()
//running it as a function and passing in some arguments
app.use(require("express-session") ({
	secret: "secret cypher",
	resave: false,
	saveUninitialized: false
}));

//setting passport up so it will work in the app
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
//responsible for reading the session, taking encoded data from the session
//and decoding it (deserialize), and then encoding it (serialize) and 
//putting it back in the session

//rather than needing to write our own serialize and deserialize methods
//in user.js, by adding in passpost-local-mongoose, we've added those methods
//in automatically
//we're using the ones that come with passport-local-mongoose and just 
//telling passport to use what's already defined on the user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===========
// ROUTES
//===========

app.get("/", function(req, res) {
	res.render("home");
});

//when a get request comes in for "/secret", it first runs isLoggedIn
//before it does anything else
//if isLoggedIn shows the user is currently authenticated, it calls next()
//which refers to our lambda function here rendering the secret page
app.get("/secret", isLoggedIn, function(req, res) {
	res.render("secret");
});

// Auth Routes
// show sign up form
app.get("/register", function(req, res) {
  res.render("register");
});

//handling user sign up
app.post("/register", function(req, res) {
	//User.register creates a new User object with just the username populated
	//We don't want to pass the password in directly, because we don't want to store it in plaintext
	//Somehow .register() takes in the password as a second argument, hashes it, and adds it 
	//to the new User object, and then passes is back in the callback function arg "user"
	User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
		if(err) {
			console.log(err);
			return res.render('register');
		}
			//this next bit happens once the user has been created and there is no error
			//passport.authenticate() actually logs the user in, takes care of everything in 
			// the session, store the correct information, runs the serializeUser method, 
			// and specifically uses the "local" strategy as specified below
			//Could optionally use "twitter" or "facebook", or any other strategy
			passport.authenticate("local")(req, res, function() {
				res.redirect("/secret");
			});
	});
});

// LOGIN ROUTES
// render login form
app.get("/login", function(req, res) {
	res.render("login");
});

//login logic
//middleware - some code that runs before our final route callback
//when our app gets a post request to "/login", it'll run the 
//passport.authenticate("local", ...) immediately
//we can have multiple middleware stacked up
//the idea is that they sit between the beginning of the route, and the
//handler of the route (callback function), that sits at the end
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res) {
	
});


app.get("/logout", function(req, res) {
	//we get this from passport
	//when we call this, we're not actually changing any data in the database, etc
	//whats actually happening - passport is destroying all the user data in this session
	//no longer saving this from session to session
	req.logout();
	res.redirect("/");
});


//our own middleware!
//next is the next thing that needs to be called
//passes control to the next handler
function isLoggedIn(req, res, next) {
	//req.isAuthenticated() is also something we get from passport
  if(req.isAuthenticated()) {
  	return next();
  }
  res.redirect("/login");
}	

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("server is listening");
});