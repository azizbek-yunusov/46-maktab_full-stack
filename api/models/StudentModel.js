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
  group: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
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

studentSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

module.exports = model("Student", studentSchema);
