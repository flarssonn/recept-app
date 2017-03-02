'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    tag: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Tag.belongsToMany(models.Recipe, {
          as: "tags",
          through: models.IsTagged,
          onDelete: 'cascade'
        });
      }
    }
  });
  return Tag;
};
