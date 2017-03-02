var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.json(users);
  });
});

/* GET single user by id */
router.get('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  models.User.findById(id).then(function(user) {
    res.json(user);
  });
});

/* POST create new user */
router.post('/create', function(req, res, next) {
  models.User.create({
    username: req.body.username,
    password: req.body.password,
    email:    req.body.email
  }).then(function() {
    res.redirect('/');
  });
});

/* POST disable user with this id */
router.post('/disable/:id', function(req, res, next) {
  var rid = parseInt(req.params.id);
  models.Post.update(
    { active: false },
    { where:
      {id: rid}
    }
  );
});
// UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;

});

module.exports = router;
