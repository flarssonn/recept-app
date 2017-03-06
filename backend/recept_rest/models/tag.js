'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    tag: {
      type: DataTypes.STRING,
      unique: true
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Tag.belongsToMany(models.Recipe, {
          through: 'IsTagged'
        });
      }
    }
  });
  return Tag;
};
