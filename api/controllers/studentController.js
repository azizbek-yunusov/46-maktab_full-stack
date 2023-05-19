const StudentModel = require("../models/StudentModel");

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
  }
};

const addStudents = async (req, res) => {
  try {
    const student = await StudentModel.create(req.body);
    await student.save();
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
  }
};
const getBystudent = async (req, res) => {
  try {
    const student = await StudentModel.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await StudentModel.findByIdAndUpdate(
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
    const student = await StudentModel.findByIdAndDelete(req.params.id);
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
