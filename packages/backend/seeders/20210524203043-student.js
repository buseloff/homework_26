"use strict";

function generate_students(groups) {
  const students = [];
  for (let i = 0; i < groups.length; i++) {
    const x = Math.round(Math.random() * 50);
    for (let j = 0; j < x; j++) {
      students.push({
        name: `Firstname${i}${j}`,
        surname: `Lastname${i}${j}`,
        age: Math.round(Math.random() * 40) + 16,
        email: `Surname${i}${j}@gmail.com`,
        id_group: groups[i].id,
      });
    }
  }
  return students;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('SELECT id FROM "Groupinfo"')
      .then(([results, metadata]) => {
        return queryInterface.bulkInsert(
          "Student",
          generate_students(results),
          { validate: true }
        );
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Student", null, {});
  },
};
