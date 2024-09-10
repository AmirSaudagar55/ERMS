const express = require('express');
const router = express.Router();
const treatmentController = require('../controllers/treatmentController');

// Routes
router.post('/treatments', treatmentController.addTreatment);
router.get('/treatments/patient/:patientID', treatmentController.getTreatmentsByPatient);

module.exports = router;
