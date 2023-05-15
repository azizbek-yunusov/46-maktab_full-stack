const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      default: "gallery",
      enum: ["gallery", "banner"],
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Image", imageSchema);
