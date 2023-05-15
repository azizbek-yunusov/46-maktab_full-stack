const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ msg: "Invalid Authentication" });

    jwt.verify(token, JWT_SECRET, (err, admin) => {
      if (err) return res.status(401).json({ msg: "Invalid Authentication" });

      req.admin = admin;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
