'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('devices', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id'
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false,
        field: 'name'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
        field:'category_id'
      },
      color: {
        type: Sequelize.STRING(16),
        allowNull: false,
        field:'color'
      },
      partNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field:'part_number'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('devices')
  }
};
