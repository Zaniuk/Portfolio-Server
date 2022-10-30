'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Home', [{
      greeting: 'Hello',
      subtitle: 'I am a subtitle',
      description: 'I am a description',
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
