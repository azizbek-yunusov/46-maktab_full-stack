const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
      default: "/Avatars/lpsik4m2oowrlowbyq3l",
    },
    url: {
      type: String,
      default:
        "https://res.cloudinary.com/dztvgxnaj/image/upload/v1674919995/Avatars/lpsik4m2oowrlowbyq3l.png",
      required: true,
    },
  },
  admin: {
    type: Boolean,
    default: true,
  },
  joinned: {
    type: Date,
    default: new Date(),
  },
});


module.exports = model("Admin", adminSchema);
