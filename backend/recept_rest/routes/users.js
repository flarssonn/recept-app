var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.json(users);
  });
});

//GET single user by id
router.get('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  models.User.findById(id).then(function(user) {
    res.json(user);
  });
});


/* Check if user exists by username and password */
router.get('/checkLogin/:username/:password', function(req, res, next) {
  models.User.findOne({
    where: {username: req.params.username,
            password: req.params.password}
  }).then(function(user) {
    if (user === null) {
      res.json('0')
    }
    else {
      res.json('1')
    }
  });
});

/* Check if user exists by username */
router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  models.User.findByUsername(name).then(function(user) {
    if (user == null) {
      res.json("false");
    }
    else {
      res.json("true");
    }
  });
});

/* POST create new user */
router.post('/create', function(req, res, next) {
  models.User.findOne({
    where: {username: req.body.username}
  }).then(function(user) {
    if (user === null) {
      models.User.create({
        username: req.body.username,
        password: req.body.password,
        email:    req.body.email
      }).then(function() {

        res.redirect('/');
      });
    } else {
      res.json('User already exists')
    }
  })

});

/* POST disable user with this id */
router.post('/disable/:id', function(req, res, next) {
  var rid = parseInt(req.params.id);
  models.User.update(
    { active: false },
    { where:
      {id: rid}
    }
  );
});
// UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;


module.exports = router;

/*
-get single user
-get all users
-create users
-delete user
*/
