var express = require('express');
var router = express.Router();

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
  var pet = db.create(req.body);
  db.save(pet, function(data) {
    res.send(data);
  });
});

router.update('/', function(req, res, next) {
  res.send(200);
});

module.exports = router;