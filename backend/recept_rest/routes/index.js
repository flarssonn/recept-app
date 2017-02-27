var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  // models.User.create({
  //   username: "Bob",
  //   password: "bob",
  //   email: "thebob"
  // }).then(function(){
    res.json("Recipe");
  // });
});

module.exports = router;
