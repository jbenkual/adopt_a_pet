var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adopt');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connected to database");
});

var Pet = require("./models/pet");
var Client = require("./models/client");

exports.createPet = function(data) {
  console.log("test!");
  var newPet = new Pet(data);
  console.log("oh noes!");

  return newPet;
};

exports.createClient = function(data) {
  var newClient = new Pet({ 
    name: data.name,
    age: data.age,
    email: data.email,
    phone: data.phone,
    pets: data.pets
  });

  return newClient;
};

exports.save = function(object, cb) {
  if(!object.hasOwnProperty('save')) {
    console.error("Error: Tried to save a non-mongoose object");
    return;
  }
  object.save(function (err, data) {
    if (err)  {
      console.error(err);
    }
    console.log("Data saved!");
    cb(data);
  });
};

exports.loadPets = function(cb) {
  var data = Pet.find({}, function(err, pets) {
    cb(pets);
  });
};

exports.removePet = function(id) {
  console.log(id);
  Pet.findById(id).remove( function(err, status) {
    if(err) {
      console.error(err);
    }
  });
};

exports.updatePet = function(id, key, value, cb) {
  
};

exports.loadSinglePet = function(cb) {
  Client.findById(id, function(err, client) {
    cb(client);
  }).populate('pets')
}

