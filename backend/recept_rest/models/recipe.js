'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    description: DataTypes.TEXT,
    piclink: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Recipe.belongsTo(models.User);
        Recipe.belongsToMany(models.Tag, {
          through: 'IsTagged'
        });
      }
    }
  });
  return Recipe;
};
