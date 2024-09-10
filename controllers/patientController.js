const connection = require('../config/db');

// Add a new patient
exports.addPatient = (req, res) => {
  const { firstName, lastName, address, phoneNumber } = req.body;
  const query = `
    INSERT INTO Patient (FirstName, LastName, Address, PhoneNumber)
    VALUES (?, ?, ?, ?);`;

  connection.query(query, [firstName, lastName, address, phoneNumber], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Error adding patient' });
    }
    res.status(201).send({ message: 'Patient added successfully', patientID: results.insertId });
  });
};

// Get all patients
exports.getPatients = (req, res) => {
  const query = 'SELECT * FROM Patient;';

  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Error retrieving patients' });
    }
    res.status(200).send(results);
  });
};
