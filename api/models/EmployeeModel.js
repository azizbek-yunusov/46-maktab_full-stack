const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
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
  position: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
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
  address: {
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

employeeSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

module.exports = model("Employee", employeeSchema);
