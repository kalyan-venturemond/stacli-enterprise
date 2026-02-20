const express = require('express');
const router = express.Router();
const rateLimiter = require('../middlewares/rateLimiter');
const contactController = require('../controllers/contactController');

// POST /api/email
router.post('/email', rateLimiter, contactController.submitContact);

module.exports = router;
