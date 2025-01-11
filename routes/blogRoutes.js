const express = require('express');
const { getBlogsByCategory } = require('../controllers/blogController');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

// Route to get blogs by category
router.get('/:category',  getBlogsByCategory);
router.get('/Rustic', getBlogsByCategory);
module.exports = router;
