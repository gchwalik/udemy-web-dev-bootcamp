#Out First Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update
* remove

mongod
- used to start mongodb so we can access the database
- shut down the server with "ctrl + c"

- if mongod crashes, can run 
  cd ~
  ./mongod --repair

- if still trouble
  cd ~/database
  rm mongod.lock
  cd
  ./mongod

mongo
- used to open the shell in the terminal

show dbs
- shows all databases
- should have a unique db for each app

use 
- use [database name]
  - if exists, accesses
  - if doesn't exist, 
  - if empty, won't show it

show collections
- shows all collections in the db we're currently using

insert
- Insert rows into a collection
- ex: db.dogs.insert({name: "Rusty", breed: "Mutt"})

find
db.dogs.find()
- returns all rows in collection

db.dogs.find({name:"Rusty"})
db.dogs.find({breed: "Mutt"})

> db.dogs.find()
{ "_id" : ObjectId("59443b23fbf78dbd5fc07aac"), "name" : "Rusty", "breed" : "Mutt" }
{ "_id" : ObjectId("59443c78fbf78dbd5fc07aad"), "name" : "Lucy", "breed" : "Mutt" }
{ "_id" : ObjectId("59443ca0fbf78dbd5fc07aae"), "name" : "Lulu", "breed" : "Poodle"}

update
db.dogs.update({name:"Lulu"}, {breed: "Labrdoodle"})

> db.dogs.find()
{ "_id" : ObjectId("59443b23fbf78dbd5fc07aac"), "name" : "Rusty", "breed" : "Mutt" }
{ "_id" : ObjectId("59443c78fbf78dbd5fc07aad"), "name" : "Lucy", "breed" : "Mutt" }
{ "_id" : ObjectId("59443ca0fbf78dbd5fc07aae"), "breed" : "Labrdoodle" }

db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})

> db.dogs.find()
{ "_id" : ObjectId("59443b23fbf78dbd5fc07aac"), "name" : "Tater", "breed" : "Mutt", "isCute" : true }
{ "_id" : ObjectId("59443c78fbf78dbd5fc07aad"), "name" : "Lucy", "breed" : "Mutt" }
{ "_id" : ObjectId("59443ca0fbf78dbd5fc07aae"), "breed" : "Labrdoodle" }

> db.dogs.remove({breed: "Labrdoodle"})
WriteResult({ "nRemoved" : 1 })

> db.dogs.find()
{ "_id" : ObjectId("59443b23fbf78dbd5fc07aac"), "name" : "Tater", "breed" : "Mutt", "isCute" : true }
{ "_id" : ObjectId("59443c78fbf78dbd5fc07aad"), "name" : "Lucy", "breed" : "Mutt" }

db.dogs.remove({breed: "Mutt"}).limit(3)

db.collection.drop()
- used to delete an entire collection