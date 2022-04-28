'use strict';
let projects = require('../data/project.json')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', projects.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()

      return el
    }), {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
