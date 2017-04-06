var express = require('express');
var router = express.Router();
var models = require('../models');

//Get all recipes
router.get('/', function(req, res, next) {
    models.Recipe.findAll().then(function(recipes) {
        res.json(recipes);
    });
});

//Get single recipe
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    models.Recipe.findById(id).then(function(recipe) {
        res.json(recipe);
    });
});

//Add a recipe
router.post('/add/:user', function(req, res, next) {
  // create recipe
    models.Recipe.create({
      title: req.body.title,
      ingredients: req.body.ingredients,
      description: req.body.description,
      piclink: req.body.piclink
    }).then(function(rec) {

      // connect it to user
      var usr = req.params.user;
      models.User.findOne({
        where: {username: usr}
      }).then(function(u) {
        u.addRecipe(rec);
      });

      // Connect to tags, maybe create tag first.
      var tags = req.body.tags.split(',')
      tags.forEach(function(t) {
        models.Tag.findOne({
          where: {tag: t}
        }).then(function(existingTag) {
          if (existingTag === null) {
            models.Tag.create({
              tag: t
            }).then(function (createdTag) {
              rec.addTag(createdTag);
            });
          } else {
            rec.addTag(existingTag);
          }
        });
      });
      res.redirect('/');
    });
});

//Find all recipes from one tag
router.get('/tag/:tag', function(req, res, next) {
  models.Tag.findOne({
    where: {tag: req.params.tag}
  }).then(function(existingTag) {
    existingTag.getRecipes().then(function(recs) {
      res.json(recs);
    });
  });
});

// Edit a recipe
router.post('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  models.Recipe.findById(id).then(function(recipe) {
    recipe.update({
      title: req.body.title,
      description: req.body.description,
      ingredients: req.body.ingredients,
      piclink: req.body.piclink
    }).then(function() {
      res.json('updated');
    });
  });
});

//Delete a recipe
router.post('/delete/:id', function(req, res, next) {
    var rid = parseInt(req.params.id);
    models.Recipe.destroy({
      where: {
        id: rid
      }
    }).then(function() {
      res.redirect('/recipes');
    });
});

module.exports = router;
