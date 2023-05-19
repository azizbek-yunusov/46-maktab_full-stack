const { Router } = require("express");
const authAdminMiddleware = require("../middleware/authAdminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const {
  addStudents,
  getAllStudents,
  deleteStudent,
  updateStudent,
  getBystudent,
} = require("../controllers/studentController");
const router = Router();

router.post("/", authMiddleware, authAdminMiddleware, addStudents);
router.get("/", authMiddleware, authAdminMiddleware, getAllStudents);
router.get("/:id", authMiddleware, authAdminMiddleware, getBystudent);
router.put("/:id", authMiddleware, authAdminMiddleware, updateStudent);
router.delete("/:id", authMiddleware, authAdminMiddleware, deleteStudent);

module.exports = router;
