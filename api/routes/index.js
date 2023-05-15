const router = require('express').Router();

const authRoutes = require("./authRoutes");
const imageRoutes = require("./imageRoutes");
const postRoutes = require("./postRoutes");

router.use('/auth', authRoutes);
router.use('/image', imageRoutes);
// router.use('/user', userRoutes);
// router.use('/post', postRoutes);

module.exports = router;