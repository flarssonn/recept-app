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

router.get('/ass', function(res, req, next) {
  var usr = models.User.findAll({
    where: {username: "Bob"}
  })[0];
  var rec = models.Recipe.findAll({
    where: {id: 1}
  });
  var tag = models.Tag.findAll({
    where: {tag: "tasty"}
  });

  usr.setRecipes([]).then(function() {
    // nada
  });

  rec.setTags(tag).then(function() {
    res.json("associated");
  });
});
module.exports = router;
