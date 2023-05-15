const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Employee", employeeSchema);
