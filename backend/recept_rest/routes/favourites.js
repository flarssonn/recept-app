var express = require('express');
var router = express.Router();
var models = require('../models');

// Gets all favourites belonging to a user
router.get('/:uid', function(req, res, next) {
  var uid = req.params.uid;
  models.User.findById(uid).then(function(user) {
    user.getFavourites().then(function(favs) {
      res.json(favs);
    });
  });
});

// Add a favourite to a user
router.post('/add/:uid/:rid', function(req, res, next) {
  var uid = req.params.uid;
  var rid = req.params.rid;
  models.User.findById(uid).then(function(user) {
    models.Recipe.findById(rid).then(function(recipe) {
      user.addFavourite(recipe).then(function() {
        res.json("fav added");
      });
    });
  });
});

// Delete a favourite from a user
router.get('/delete/:uid/:rid', function(req, res, next) {
  var uid = req.params.uid;
  var rid = req.params.rid;
});

module.exports = router;
