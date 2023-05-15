const AdminModel = require("../models/AdminModel");

module.exports = async (req, res, next) => {
  try {
    const user = await AdminModel.findOne({ _id: req.admin.id });
    console.log();
    if (!user.admin) {
      return res.status(401).json({ msg: "Admin resources access denied" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
