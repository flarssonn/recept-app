var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe.js');

//Get all recipes
router.get('/', function(req, res, next) {
    Recipe.findAll().then(function(recipes) {
        res.json(recipes);
    });
});

//Get single recipe
router.get('/:id', function(req, res, next) {
    // Promised based
    Recipe.findById(id).then(function(recipe) {
        res.json(recipe);
    });
});

//Add a recipe
router.post('/add', function(req, res, next) {
    Recipe.create({
      title: req.body.title,
      ingredients: req.body.ingredients,
      description: req.body.description,
      piclink: req.body.piclink
    }).then(function() {
      res.redirect('/');
    });
});


//Delete a recipe
router.post('/delete/:id', function(req, res, next) {
    var rid = parseInt(req.params.id);
    Recipe.destroy({
      where: {
        id: rid
      }
    });
});

module.exports = router;
