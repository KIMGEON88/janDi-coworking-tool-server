'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users_projects', [
      {
        projectId:1,
        userId:1
      },
      {
        projectId:2,
        userId:2
      },
      {
        projectId:3,
        userId:1
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users_projects', null, {});
  }
};