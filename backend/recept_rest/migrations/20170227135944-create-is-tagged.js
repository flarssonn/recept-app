'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('IsTaggeds', {
      IsTaggedID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RecipeID: {
        references: {
          model: recipe,
          key: "RecipeID"
        },
        allowNull: false,
        type: Sequelize.INTEGER

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      TagID: {
        references: {
          model: tag,
          key: "TagID"
        },
        allowNull: false,
        type: Sequelize.INTEGER

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('IsTaggeds');
  }
};
