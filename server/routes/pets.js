var express = require('express');
var router = express.Router();
var db = require("../db.js");

router.get('/', function(req, res, next) {
  db.loadPets(function (data) {
    res.send(data);
  });
});

router.delete("/", function(req, res, next) {
  console.log(req.query);
  if(req.query.id === undefined) {
    res.send(400);
    return;
  }
  db.removePet(req.query.id);
  res.send(200);
});

router.post('/', function(req, res, next) {
  if(req.body.name === undefined || req.body.kind === undefined) {
    res.send(400);
    return;
  }
  console.log(req.body);
  var pet = db.createPet(req.body);
  console.log("test2");
  db.save(pet, function(data) {
    res.send(data);
  });
});

router.put('/', function(req, res, next) {
  if(req.body.name === undefined || req.body.kind === undefined) {
    res.send(400);
    return;
  }
  console.log("update for : " + req.body.name);
  // var pet = db.create(req.body);
  // console.log("test2");
  // db.save(pet, function(data) {
  //   res.send(data);
  // });
});

module.exports = router;