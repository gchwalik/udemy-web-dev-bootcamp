var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  text: String,
  //storing the username directly in the comment, so we save lookup time 
  //when displaying comment list; only possible with nosql
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
});

module.exports = mongoose.model("Comment", commentSchema);