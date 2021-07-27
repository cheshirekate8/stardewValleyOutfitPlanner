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
        allowNull: false,
        references: { model: 'Users'}
      },
      bodyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Bodies'}
      },
      hairstyleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Hairstyles'}
      },
      accentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Accents'}
      },
      hatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Hats'}
      },
      shirtId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Shirts'}
      },
      pantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Pants'}
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
