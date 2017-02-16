/*

A model object for user

*/

var Sequelize = require('sequelize');
var sequelize = require('../db/..'); //add db file in url

var User = sequelize.define('Users', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING
  },
  /*
  email: {
    type:
  }
  */

})

module.exports = User;
