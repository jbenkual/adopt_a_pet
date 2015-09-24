var Mongoose = require('mongoose');

var petSchema = Mongoose.Schema({
  name: String,
  kind: String,
  variety: String,
  gender: String,
  age: Number,
  desc: String,
  available: Boolean,
  photo: String
});

petSchema.methods.toggleAvailable = function(cb) {
  this.available = !this.available;
  this.save(cb);
  //return this.model('Pet').update({ _id: this._id }, {available: !this.available}, cb);
};

var Pet = Mongoose.model('pet', petSchema);

module.exports = Pet;