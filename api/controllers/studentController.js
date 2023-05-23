const StudentsModel = require("../models/StudentsModel");

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentsModel.find();
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
  }
};

const addStudents = async (req, res) => {
  try {
    console.log(req.body);
    const student = await StudentsModel.create(req.body);
    await student.save();
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
  }
};
const getBystudent = async (req, res) => {
  try {
    const student = await StudentsModel.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await StudentsModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
  }
};
const deleteStudent = async (req, res) => {
  try {
    const student = await StudentsModel.findByIdAndDelete(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addStudents,
  getAllStudents,
  deleteStudent,
  updateStudent,
  getBystudent,
};
