const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Routes
router.get('/patients', patientController.getPatients);
router.post('/patients', patientController.addPatient);

module.exports = router;
