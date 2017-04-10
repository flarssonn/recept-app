var express = require('express');
var router = express.Router();
var models = require('../models');

// Gets all favourites belonging to a user
router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  models.User.findOne({
    where: {username: username}
  }).then(function(user) {
    user.getFavourites().then(function(favs) {
      res.json(favs);
    });
  });
});

// Add a favourite to a user
router.post('/add/:username/:rid', function(req, res, next) {
  var username = req.params.username;
  var rid = req.params.rid;
  models.User.findOne({
    where: {username: username}
  }).then(function(user) {
    models.Recipe.findById(rid).then(function(recipe) {
      user.addFavourite(recipe).then(function() {
        res.json("fav added");
      });
    });
  });
});

// Delete a favourite from a user
router.get('/delete/:username/:rid', function(req, res, next) {
  var username = req.params.username;
  var rid = req.params.rid;
});

module.exports = router;
