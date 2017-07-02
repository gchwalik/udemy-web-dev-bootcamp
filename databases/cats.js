var mongoose = require("mongoose");
// cat_app is the name of our database
// if it doesn't yet exist, mongo will create it
mongoose.connect("mongodb://localhost/cat_app")

//this schema doesn't define a table, but provides flexible structure
//can add or remove fields from this when making cats
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	mood: String
});

//takes pattern that is catSchema, and converts it into a collection 
//in the database
//also exposes all the mongo methods, like find, update, etc
var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
var george = new Cat({
	name: "George",
	age: 11,
	mood: "grouchy"
});

george.save(function(err, cat) {
	if(err) {
		console.log("error");
	}
	else {
		console.log("success");
		console.log(cat);
	}
});

Cat.create({
	name: "Snow White",
	age: 15, 
	mood: "nice"
}, function(err, cat) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(cat);
	}
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
	if(err) {
		console.log("OH NO");
		console.log(err);
	}
	else {
		console.log("ALL THE CATS");
		console.log(cats);
	}
});