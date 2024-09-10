const express = require('express');
const router = express.Router();
const nurseController = require('../controllers/nurseController');

// Routes
router.get('/nurses', nurseController.getNurses);
router.get('/nurses/:id', nurseController.getNurseById);

module.exports = router;
