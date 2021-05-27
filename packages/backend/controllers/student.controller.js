const { Student } = require("../models");

module.exports.createStudent = async (req, res, next) => {
  const { body } = req;
  console.log(body);
  try {
    const createdStudent = await Student.create(body);
    if (createdStudent) {
      return res.status(201).send({ data: createdStudent });
    }
    res.status(400).send("Bad request!");
  } catch (err) {
    next(err);
  }
};
module.exports.getAllStudents = async (req, res, next) => {
  const {
    query: { page, results },
  } = req;
  try {
    const foundStudents = await Student.findAll({
      attributes: {
        exclude: ["GroupinfoId", "groupId"],
      },
      limit: results,
      offset: results * (page - 1),
      raw: true,
    });
    res.status(200).send({ data: foundStudents });
  } catch (err) {
    next(err);
  }
};

module.exports.getStudentById = async (req, res, next) => {
  const {
    params: { studentId },
  } = req;
  console.log(studentId);
  try {
    const foundStudent = await Student.findByPk(studentId, {
      attributes: {
        exclude: ["GroupinfoId", "groupId"],
      },
    });
    if (foundStudent) {
      return res.status(200).send({ data: foundStudent });
    }
    res.status(400).send("Bad request!");
  } catch (err) {
    next(err);
  }
};

module.exports.updateStudentById = async (req, res, next) => {
  const {
    body,
    params: { studentId },
  } = req;
  console.log(studentId);
  try {
    const [updatedRow, [updatedStudents]] = await Student.update(body, {
      where: { id: studentId },
      returning: true,
    });

    if (updatedRow) {
      return res.status(200).send({ data: updatedStudents });
    }
    res.status(400).send("Bad request!");
  } catch (err) {
    next(err);
  }
};

module.exports.deleteStudentById = async (req, res, next) => {
  const {
    params: { studentId },
  } = req;
  console.log(studentId);
  try {
    const deletedStudent = await Student.destroy({
      where: {
        id: studentId,
      },
    });
    if (deletedStudent) {
      return res.sendStatus(200).send("OK! DELETED!");
    }
    res.status(404).send("Not found!");
  } catch (err) {
    next(err);
  }
};

module.exports.addStudentPhoto = async (req, res, next) => {
  const {
    file,
    params: { studentId },
  } = req;

  try {
    const studentUpdate = await Student.findByPk(studentId);
    console.log(studentUpdate.photo);
    if (studentUpdate) {
      studentUpdate.photo.push(file.filename);
      const [updatedRow, [updatedStudents]] = await Student.update(
        studentUpdate.get(),
        { where: { id: studentId }, returning: true }
      );
      return res.status(200).send({ data: updatedStudents });
    }
    res.status(404).send("Not found");
  } catch (err) {
    next(err);
  }
};
