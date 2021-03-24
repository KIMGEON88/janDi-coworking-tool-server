'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projects', [
      {
        projectName: 'Apr',
        adminUserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        projectName: 'Bpr',
        adminUserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        projectName: 'Cpr',
        adminUserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {});
  }
};