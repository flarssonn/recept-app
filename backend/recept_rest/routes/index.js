var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {

    res.json("Start");

});

router.get('/init', function(req, res, next) {
  models.User.create({
    username: "the@bob.com",
    password: "bob",
    email: "the@bob.com"
  }).then(function() {
    models.Recipe.create({
      title: "Pie",
      ingredients: "small pies",
      description: "put together",
      piclink: "google"
    }).then(function() {
      models.Tag.create({
        tag: "tasty"
      }).then(function() {
        res.json("done");
      });
    });
  });
});

router.get('/ass', function(req, res, next) {
  models.User.findOne({
    where: {username: "the@bob.com"}
  }).then(function(bob) {
    models.Recipe.findById(1).then(function(paj) {
      bob.addRecipe(paj);
      res.json(paj)
    });
  });

  models.Recipe.findById(1).then(function(paj) {
    models.Tag.findById(1).then(function(tasty) {
      tasty.addRecipe(paj)
    })
  })
});
module.exports = router;
