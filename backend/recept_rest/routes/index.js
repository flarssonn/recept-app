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
        TagID: "tasty"
      }).then(function() {
        res.json("done");
      });
    });
  });
});

router.get('/ass', function(req, res, next) {
  var usr = models.User.findAll({
    where: {username: "Bob"}
  }).then(function() {
    res.json("hi");
  });
  var rec = models.Recipe.findAll({
    where: {RecipeID: 1}
  });
  // var tag = models.Tag.findAll({
  //   where: {TagID: "tasty"}
  // });
  // usr.setRecipes(rec[0]).then(function() {
  //   res.json("associated");
  // });

  // usr[0].getRecipes().then(function() {
    // rec[0].setTags(tag).then(function() {
    // res.json("yey");
      // res.json("associated");
    // });
  // });
});
module.exports = router;
