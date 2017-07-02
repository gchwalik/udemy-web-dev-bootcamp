var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest", 
		image: "http://i.imgur.com/R9ZuGXV.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lacus sed nulla facilisis, non aliquet mi tincidunt. Praesent semper eros a urna gravida tristique. Duis posuere, quam ut condimentum iaculis, tellus lectus varius ipsum, eget pulvinar odio ex ut orci. Nulla consectetur quis purus ac ullamcorper. Curabitur sed ultrices lorem. Praesent luctus a turpis nec aliquam. Mauris id massa ut dui fermentum ullamcorper ut vel ex. Suspendisse maximus elit mi, non congue nulla volutpat sed. Sed eu massa interdum, volutpat mi id, ornare sapien. Integer tincidunt libero ut ipsum faucibus placerat. Mauris rhoncus mattis lorem, quis dignissim nisi blandit ac."
	},	
	{
		name: "Camping Food", 
		image: "http://i.imgur.com/RkC8moO.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lacus sed nulla facilisis, non aliquet mi tincidunt. Praesent semper eros a urna gravida tristique. Duis posuere, quam ut condimentum iaculis, tellus lectus varius ipsum, eget pulvinar odio ex ut orci. Nulla consectetur quis purus ac ullamcorper. Curabitur sed ultrices lorem. Praesent luctus a turpis nec aliquam. Mauris id massa ut dui fermentum ullamcorper ut vel ex. Suspendisse maximus elit mi, non congue nulla volutpat sed. Sed eu massa interdum, volutpat mi id, ornare sapien. Integer tincidunt libero ut ipsum faucibus placerat. Mauris rhoncus mattis lorem, quis dignissim nisi blandit ac."
	},	
	{
		name: "Daisy Meadow", 
		image: "http://i.imgur.com/Kd3DEMW.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lacus sed nulla facilisis, non aliquet mi tincidunt. Praesent semper eros a urna gravida tristique. Duis posuere, quam ut condimentum iaculis, tellus lectus varius ipsum, eget pulvinar odio ex ut orci. Nulla consectetur quis purus ac ullamcorper. Curabitur sed ultrices lorem. Praesent luctus a turpis nec aliquam. Mauris id massa ut dui fermentum ullamcorper ut vel ex. Suspendisse maximus elit mi, non congue nulla volutpat sed. Sed eu massa interdum, volutpat mi id, ornare sapien. Integer tincidunt libero ut ipsum faucibus placerat. Mauris rhoncus mattis lorem, quis dignissim nisi blandit ac."
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
			
			// //add a few campgrounds
			// data.forEach(function(seed) {
			// 	Campground.create(seed, function(err, campground) {
			// 		if(err) {
			// 			console.log(err);
			// 		}
			// 		else {
			// 			console.log("added campground");
			// 			//create a comment
			// 			Comment.create(
			// 				{
			// 					text: "This place is great, but I wish there was internet",
			// 					author: "Homer"
			// 				}, function(err, comment) {
			// 					if(err) {
			// 						console.log(err);
			// 					}
			// 					else {
			// 						campground.comments.push(comment);
			// 						campground.save();
			// 						console.log("created new comment");
			// 					}
			// 				} 
			// 			); //Comment.create()
			// 		} //else
			// 	}); //Campground.create()
			// }); //data.forEach() 
		} //else
	});

	
	//add a few comments
}

module.exports = seedDB;