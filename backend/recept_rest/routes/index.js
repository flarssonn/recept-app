var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json("Start");
});

router.get('/init', function(req, res, next) {
  models.User.create({
    username: "Bob",
    password: "bob",
    email: "thebob"
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
    where: {username: "Beb"}
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

  //var rec = models.Recipe.findAll({
  //  where: {RecipeID: 1}
  //});

  // var tag = models.Tag.findAll({
  //   where: {TagID: "tasty"}
  // });
  // usr.setRecipes([]).then(function() {
  //   res.json("associated nothing");
  // });

  // usr.getRecipes().then(function() {
    // rec[0].setTags(tag).then(function() {
    // res.json("yey");
      // res.json("associated");
    // });
  // });

  //rec.setTags(tag).then(function() {
  //  res.json("associated");
  //});
});
module.exports = router;
