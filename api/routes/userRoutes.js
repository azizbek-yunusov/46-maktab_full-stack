const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/authMiddleware");
const authAdminMiddleware = require("../middleware/authAdminMiddleware");
const {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserInfo,
  createUser,
  uploadAvatar,
  updateProfile,
  deleteSelected,
  changePassword,
} = require("../controllers/userController");

router.put("/update", authMiddleware, updateProfile);
router.put("/avatar", authMiddleware, uploadAvatar);
router.put("/change-password", authMiddleware, changePassword);
router.get("/me", authMiddleware, getUserInfo);
router.post("/", authMiddleware, authAdminMiddleware, createUser);
router.get("/", authMiddleware, authAdminMiddleware, getAllUsers);
router.get("/:id", authMiddleware, authAdminMiddleware, getUser);
router.put("/:id", authMiddleware, authAdminMiddleware, updateUser);
router.delete("/:id", authMiddleware, authAdminMiddleware, deleteUser);
router.post("/selected", authMiddleware, authAdminMiddleware, deleteSelected);

module.exports = router;
