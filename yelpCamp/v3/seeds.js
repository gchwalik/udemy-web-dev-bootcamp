var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest", 
		image: "http://i.imgur.com/R9ZuGXV.jpg",
		description: "Camping at the top of a mountain"
	},	
	{
		name: "Camping Food", 
		image: "http://i.imgur.com/RkC8moO.jpg",
		description: "Just some of the food you can have from camping"
	},	
	{
		name: "Daisy Meadow", 
		image: "http://i.imgur.com/Kd3DEMW.jpg",
		description: "Flowers all around your tent!"
	}
];


function seedDB() {
	//Remove all campgrounds
	Campground.remove({}, function(err) {
		if(err) {
			console.log(err);
		}
		else {
			console.log("removed campgrounds");
			
			//add a few campgrounds
			data.forEach(function(seed) {
				Campground.create(seed, function(err, campground) {
					if(err) {
						console.log(err);
					}
					else {
						console.log("added campground");
						//create a comment
						Comment.create(
							{
								text: "This place is great, but I wish there was internet",
								author: "Homer"
							}, function(err, comment) {
								if(err) {
									console.log(err);
								}
								else {
									campground.comments.push(comment);
									campground.save();
									console.log("created new comment");
								}
							} 
						); //Comment.create()
					} //else
				}); //Campground.create()
			}); //data.forEach() 
		} //else
	});

	
	//add a few comments
}

module.exports = seedDB;