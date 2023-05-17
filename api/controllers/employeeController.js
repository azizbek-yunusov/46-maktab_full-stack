const EmployeeModel = require("../models/EmployeeModel");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json(employees);
  } catch (err) {
    console.log(err);
  }
};

const addEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.create(req.body);
    await employee.save();
    res.status(200).json(employee);
  } catch (err) {
    console.log(err);
  }
};
const getByEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    console.log(err);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(employee);
  } catch (err) {
    console.log(err);
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.findByIdAndDelete(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
  getByEmployee,
};
