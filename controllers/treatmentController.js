const connection = require('../config/db');

// Add a treatment for a patient
exports.addTreatment = (req, res) => {
  const { patientID, doctorID, medication, treatmentDate } = req.body;
  const query = `
    INSERT INTO Treatment (PatientID, DoctorID, Medication, TreatmentDate)
    VALUES (?, ?, ?, ?);`;

  connection.query(query, [patientID, doctorID, medication, treatmentDate], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Error adding treatment' });
    }
    res.status(201).send({ message: 'Treatment added successfully', treatmentID: results.insertId });
  });
};

// Get treatments by patient ID
exports.getTreatmentsByPatient = (req, res) => {
  const { patientID } = req.params;
  const query = `
    SELECT * FROM Treatment WHERE PatientID = ?;`;

  connection.query(query, [patientID], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Error retrieving treatments' });
    }
    res.status(200).send(results);
  });
};
