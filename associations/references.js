var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Post"
			}
		]
});
var User = mongoose.model("User", userSchema);

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });

// Post.create({
// 		title: "How to cook the best burger",
// 		content: "blah blah blah blah"
// 	}, function(err, post) {
// 		console.log(post);
// });

// Post.create({
// 		title: "How to cook the best burger pt 2",
// 		content: "blah blah blah blah"
// 	}, function(err, post) {
// 		User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
// 			if(err) {
// 				console.log(err);
// 			}
// 			else {
// 				foundUser.posts.push(post);
// 				foundUser.save(function(err, data) {
// 					if(err) {
// 						console.log(err);
// 					}
// 					else {
// 						console.log(data);
// 					}
// 				});
// 			}
// 		});
// });

//Find User
//Find all Posts for that User

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(user);
	}
});