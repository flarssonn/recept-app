var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.render();
  })
});

module.exports = router;

/*
-get single user
-get all users
-create users
-delete user
*/
