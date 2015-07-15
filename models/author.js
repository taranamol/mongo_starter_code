var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  author: String
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;