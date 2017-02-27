'use strict';
module.exports = function(sequelize, DataTypes) {
  var IsTagged = sequelize.define('IsTagged', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return IsTagged;
};
