"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Student", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 5, max: 100 },
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      photo: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
      },
      id_group: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Groupinfo",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Student");
  },
};
