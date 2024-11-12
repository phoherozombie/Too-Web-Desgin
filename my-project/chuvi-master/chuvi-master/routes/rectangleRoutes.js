// routes/rectangleRoutes.js
const express = require('express');
const router = express.Router();
const rectangleController = require('../controllers/rectangleController');

// Định nghĩa route POST để tính chu vi hình chữ nhật
router.get('/calculate', rectangleController.calculatePerimeter);
router.post('/calculate', rectangleController.calculatePerimeter);

module.exports = router;