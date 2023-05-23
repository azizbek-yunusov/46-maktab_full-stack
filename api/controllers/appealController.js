const AppealModel = require("../models/AppealModel");

const getAllAppeals = async (req, res) => {
  try {
    const appeals = await AppealModel.find();
    res.status(200).json(appeals);
  } catch (err) {
    console.log(err);
  }
};

const sendAppeal = async (req, res) => {
  try {
    const appeal = await AppealModel.create(req.body);
    await appeal.save();
    res.status(200).json(appeal);
  } catch (err) {
    console.log(err);
  }
};
const getByIdAppeal = async (req, res) => {
  try {
    const appeal = await AppealModel.findById(req.params.id);
    res.status(200).json(appeal);
  } catch (err) {
    console.log(err);
  }
};

const editAppeal = async (req, res) => {
  try {
    const appeal = await AppealModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(appeal);
  } catch (err) {
    console.log(err);
  }
};
const deleteAppeal = async (req, res) => {
  try {
    const appeal = await AppealModel.findByIdAndDelete(req.params.id);
    res.status(200).json(appeal);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  sendAppeal,
  getAllAppeals,
  deleteAppeal,
  editAppeal,
  getByIdAppeal,
};
