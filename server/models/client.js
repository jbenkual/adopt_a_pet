var Mongoose = require('mongoose');

var clientSchema = Mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  pets: [{type: Mongoose.Schema.ObjectId , ref: 'Pet'}]
});

var Client = Mongoose.model('client', clientSchema);

module.exports = Client;