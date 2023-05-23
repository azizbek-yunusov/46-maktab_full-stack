const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  classNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  classLetter: {
    type: String,
    trim: true,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: "male"
  },
  avatar: {
    type: String,
    default:
      "https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png",
  },
  brith: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Student", studentSchema);
