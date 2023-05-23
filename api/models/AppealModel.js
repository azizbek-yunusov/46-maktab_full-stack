const { Schema, model } = require("mongoose");

const appealSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Appeal", appealSchema);
