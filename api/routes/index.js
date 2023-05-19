const router = require("express").Router();

const authRoutes = require("./authRoutes");
const imageRoutes = require("./imageRoutes");
const postRoutes = require("./postRoutes");
const employeeRoutes = require("./employeeRoutes");
const studentRoutes = require("./studentRoutes");
const userRoutes = require("./userRoutes");

router.use("/auth", authRoutes);
router.use("/image", imageRoutes);
router.use("/employee", employeeRoutes);
router.use("/user", userRoutes);
router.use("/student", studentRoutes);
router.use("/post", postRoutes);

module.exports = router;
