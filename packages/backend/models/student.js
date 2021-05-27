"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      age: DataTypes.INTEGER,
      email: DataTypes.STRING,
      id_group: DataTypes.INTEGER,
      photo: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      timestamps: false,
      freezeTableName: true,
      // tableName: 'Student' ,
    }
  );

  Student.associate = function (models) {
    Student.belongsTo(models.Groupinfo, {
      foreignKey: {
        field: "id_group",
      },
      as: "group",
    });
  };
  return Student;
};
