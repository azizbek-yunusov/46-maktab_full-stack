const router = require("express").Router();

const authRoutes = require("./authRoutes");
const imageRoutes = require("./imageRoutes");
const postRoutes = require("./postRoutes");
const employeeRoutes = require("./employeeRoutes");
const userRoutes = require("./userRoutes");
const appealRoutes = require("./appealRoutes");
const studentRoutes = require("./studentRoutes");

router.use("/auth", authRoutes);
router.use("/image", imageRoutes);
router.use("/employee", employeeRoutes);
router.use("/user", userRoutes);
router.use("/student", studentRoutes);
router.use("/post", postRoutes);
router.use("/appeal", appealRoutes);

module.exports = router;
