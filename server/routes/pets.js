var express = require('express');
var router = express.Router();
var db = require("../db.js")

router.get('/', function(req, res, next) {
  db.load(function (data) {
    res.send(data);
  });
});

router.delete("/", function(req, res, next) {
  db.remove(req.body.id);
});

router.post('/', function(req, res, next) {
  if(req.body.name === undefined || req.body.kind === undefined) {
    res.send(400);
    return;
  }
  //console.log(req.body);
  var pet = db.create(req.body);
  console.log("test2");
  db.save(pet, function(data) {
    res.send(data);
  });
});

router.put('/', function(req, res, next) {
  res.send(200);
});

module.exports = router;