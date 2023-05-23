const { Router } = require("express");
const authAdminMiddleware = require("../middleware/authAdminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const {
  sendAppeal, getAllAppeals, getByIdAppeal, editAppeal, deleteAppeal,
} = require("../controllers/appealController");
const router = Router();

router.post("/",  sendAppeal);
router.get("/", authMiddleware, authAdminMiddleware, getAllAppeals);
router.get("/:id", authMiddleware, authAdminMiddleware, getByIdAppeal);
router.put("/:id", authMiddleware, authAdminMiddleware, editAppeal);
router.delete("/:id", authMiddleware, authAdminMiddleware, deleteAppeal);

module.exports = router;
