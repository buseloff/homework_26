"use strict";

function generate_groupinfos_seed() {
  const groups = [];
  for (let i = 1; i < 11; i++) {
    groups.push({
      name: `6120-${i}`,
    });
  }
  return groups;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Groupinfo", generate_groupinfos_seed(), {
      validate: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groupinfo", null, {});
  },
};
