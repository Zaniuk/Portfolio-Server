'use strict';

const hash = require('../src/helpers/hash');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admin', [{
      name: 'Admin',
      email: 'john@doe.com',
      password: hash('123456'),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
