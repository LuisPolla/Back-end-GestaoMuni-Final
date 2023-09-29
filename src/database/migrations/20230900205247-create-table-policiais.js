'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('policiais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
      },
      cargo: {
        type: Sequelize.STRING,
      },
      patente: {
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('policiais');
  },
};