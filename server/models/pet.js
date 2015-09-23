var Mongoose = require('mongoose');

var petSchema = Mongoose.Schema({
  name: String,
  kind: String,
  variety: String,
  gender: String,
  age: Number,
  desc: String,
  available: Boolean
});

var Pet = Mongoose.model('pet', petSchema);

module.exports = Pet;