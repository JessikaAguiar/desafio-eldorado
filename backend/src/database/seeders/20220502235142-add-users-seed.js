'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        password: '$2a$04$TGg/EIFnxvioUwNPAAj7Tur0YowRCDzGL0GoGGTJImGNV0/Zg1ckq'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
