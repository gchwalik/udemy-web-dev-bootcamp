// https://unsplash.com/
// Another free image website

var bodyParser = require("body-parser"),
    express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose");
    
var app = express();

//APP CONFIG
mongoose.connect("mongodb://localhost/blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//expressSanitizer needs to be set up after body-parser
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
// 	title: "Test Blog",
// 	image: "https://images.unsplash.com/photo-1497616987741-7fba8102046e?dpr=1.125&auto=compress,format&fit=crop&w=1199&h=794&q=80&cs=tinysrgb&crop=&bg=",
// 	body: "Hello, this is a blog post"
// });

//RESTFUL ROUTES
app.get("/", function(req, res) {
	res.redirect("/blogs");
});

//INDEX ROUTE
app.get("/blogs", function(req, res) {
	Blog.find({}, function(err, blogs) {
		if(err) {
			console.log(err);
		}
		else {
			res.render("index", {blogs: blogs});
		}
	});
});

//NEW ROUTE
app.get("/blogs/new", function(req, res) {
	res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res) {
	//sanitize input
	req.body.blog.body = req.sanitize(req.body.blog.body);
	//create blog
	Blog.create(req.body.blog, function(err, newBlog) {
		if(err) {
			res.render("new");
		}
		else {
			//then, redirec to the index
			res.redirect("/blogs");
		}
	});
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog) {
		if(err) {
			res.redirect("/blogs");
		}
		else {
			res.render("show", {blog: foundBlog});
		}
	});
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog) {
  	if(err) {
  		res.redirect("/blogs");
  	}
  	else {
  		res.render("edit", {blog: foundBlog});
  	}
  });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res) {
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
		if(err) {
			res.redirect("/blogs");
		}
		else {
			res.redirect("/blogs/" + req.params.id);
		}
	});
});

//DELETE ROUTE
app.delete("/blogs/:id", function(req, res) {
	//destroy blog
	Blog.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			res.redirect("/blogs");
		}
		else {
			//redirect somewhere
			res.redirect("/blogs");
		}
	});
});


app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is listening");
});