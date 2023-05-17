const { Router } = require("express");
const authAdminMiddleware = require("../middleware/authAdminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const {
  addEmployee,
  getAllEmployees,
  getByEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employeeController");
const router = Router();

router.post("/", authMiddleware, authAdminMiddleware, addEmployee);
router.get("/", authMiddleware, authAdminMiddleware, getAllEmployees);
router.get("/:id", authMiddleware, authAdminMiddleware, getByEmployee);
router.put("/:id", authMiddleware, authAdminMiddleware, updateEmployee);
router.delete("/:id", authMiddleware, authAdminMiddleware, deleteEmployee);

module.exports = router;
