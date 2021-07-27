'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Outfits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bodyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hairstyleId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      accentId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hatId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shirtId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pantId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Outfits');
  }
};
