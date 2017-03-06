'use strict';
module.exports = function(sequelize, DataTypes) {
  var IsTagged = sequelize.define('IsTagged', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        IsTagged.belongsTo(models.Recipe, {foreignKey: "RecipeID"});
        IsTagged.belongsTo(models.Tag, {foreignKey: "TagID"});
      }
    }
  });
  return IsTagged;
};
