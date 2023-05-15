const { Router } = require("express");
const authAdminMiddleware = require("../middleware/authAdminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const { uploadImage, deleteImage, deleteSelected, getAllImages } = require("../controllers/imageController");
const router = Router();

// path - /post
router.get("/", getAllImages);
// router.get("/:id", getPostOne);
// admin only
router.post("/upload", authMiddleware, authAdminMiddleware, uploadImage);
router.delete("/:id", authMiddleware, authAdminMiddleware, deleteImage);
router.post("/selected", authMiddleware, authAdminMiddleware, deleteSelected);

module.exports = router;
