var express = require('express');
var router = express.Router();
var db = require("../db.js");

router.get('/', function(req, res) {
  if(req.query.id !== undefined) {
    db.loadSingleClient(function (data) {
      res.send(data);
    })
  }
  else {
    db.loadClients(function (data) {
      res.send(data);
    });
  }
  
});

router.delete("/", function(req, res) {
  if(req.query.id === undefined) {
    res.send(400);
    return;
  }
  db.removeClient(req.query.id);
  res.send(200);
});

router.post('/', function(req, res) {
  if(req.body.name === undefined || req.body.kind === undefined) {
    res.send(400);
    return;
  }
  var client = db.createClient(req.body);
  db.save(client, function(data) {
    res.send(data);
  });
});

router.put('/', function(req, res) {
  if(req.body.name === undefined || req.body.kind === undefined) {
    res.send(400);
    return;
  }
  console.log("update for : " + req.body.name);
  Client.update( {_id: body.id}, req.body, function(err, client) {

  });
});

router.put('/adopt', function(req, res) {
  Client.findById(req.query.clientId, function(err, client) {
    Pet.findById(req.query.petId, function(err, pet) {
      if(client.pets.indexOf(pet._id) !== -1) {
        res.status(400).send('you already have that animal!');
      }
      else {
        client.pets.push(pet._id);
        client.save(function (err, savedClient) {
          pet.available = false;
          pet.save();
          res.send(savedClient);
        });
      }
    });
  });
});

module.exports = router;