"use strict";
module.exports = (sequelize, DataTypes) => {
  const Groupinfo = sequelize.define(
    "Groupinfo",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      // tableName: 'Groupinfo',
    }
  );

  Groupinfo.associate = function (models) {
    Groupinfo.hasMany(models.Student, {
      foreignKey: {
        field: "id_group",
      },
      as: "students",
    });
  };

  return Groupinfo;
};
