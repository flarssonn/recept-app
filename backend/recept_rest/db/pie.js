/*
  Sequelize the shit outta that pie base.
  Pretty much copied from l22/node_orm
*/

var Sequelize = require('sequelize');

var sq = new Sequelize('pie', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sq;
