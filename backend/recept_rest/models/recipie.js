var Sequelize = require('sequelize');
var sequelize = require('../db/pie.js'); // in the works

var Recipie = null;

var Recipie = sequelize.define('Recipies', {
    id : {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: Sequelize.STRING
    },
    description : {
        type: Sequelize.STRING
    }
    //picture : {
        //TODO
    //}
},{
    timestamps: false
});



module.exports = Recipie;
