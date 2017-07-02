REST - a mapping between HTTP routes and CRUD
- Representational State Transfer


RESTFUL ROUTES

name			url 							verb		  mongoose method						description
=================================================================================================================
INDEX 		/dogs 						GET				Dog.find()								Display a list of all dogs
NEW				/dogs/new					GET				N/A												Displays form to make a new dogs
CREATE		/dogs						 	POST			Dog.create()							Add new dog to DB
SHOW			/dogs/:id					GET				Dog.findById()						Shows info about one dog
EDIT			/dogs/:id/edit		GET				Dog.findById()						Show edit form for one dog
UPDATE		/dogs/:id					PUT				Dog.findByIdAndUpdate()		Update a particular dog, then redirect somewhere
DESTROY		/dogs/:id					DELETE		Dog.findByIdAndRemove()		Delete a particular dog, then redirect somewhere

