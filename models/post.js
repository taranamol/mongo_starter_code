var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CommentSchema = new Schema({
body: {
  text: String
  default: ""
  }	
});

var PostSchema = new Schema({
    author: String,
    text: String,
    default: ""
  },
  comment: [CommentSchema]   // EMBEDDING :D
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;





