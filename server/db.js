var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connected to database");
});

var Pet = mongoose.model('pet', {
    name: String,
    kind: String,
    variety: String,
    gender: Boolean,
    age: Number,
    desc: String,
    available: Boolean
});

exports.create = function(data) {
  var newPet = new Pet({ 
    name: data.name,
    kind: data.kind,
    variety: data.variety,
    gender: data.gender,
    age: data.number,
    desc: data.desc,
    available: data.available
  });

  return newPet;
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

exports.load = function(cb) {
  var data = Pet.find({}, function(err, pets) {
    cb(pets);
  });
};

exports.remove = function(id) {
  Pet.findById(id).remove( function(err, status) {
    if(err) {
      console.error(err);
    }
  });
};

exports.update = function(id, key, value, cb) {
  
};

