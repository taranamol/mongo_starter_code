var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CommentSchema = new Schema({
body: {
  text: String,
  default: ""
  }	
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;

var PostSchema = new Schema({
    author: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
  comment: [CommentSchema] ,  // EMBEDDING :D

   Author: [{
    type: Schema.Types.ObjectId,  //REFERENCING :D
    ref: 'Author'
  }]
});

var Post = mongoose.model('Post', PostSchema);

module.exports.Post = Post;


// var Comment = mongoose.model('Comment', CommentSchema);

// module.exports = Comment;


var AuthorSchema = new Schema({
  author: String
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;



