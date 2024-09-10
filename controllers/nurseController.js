const connection = require('../config/db');

// Get all nurses and their shifts
exports.getNurses = (req, res) => {
  const query = `
    SELECT Worker.WorkerID, User.Username, Shift.StartTime, Shift.EndTime
    FROM Worker
    INNER JOIN User ON Worker.UserID = User.UserID
    INNER JOIN Shift ON Worker.WorkerID = Shift.WorkerID
    WHERE Worker.WorkerType = 'Nurse';`;

  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Error retrieving nurses' });
    }
    res.status(200).send(results);
  });
};

// Get a single nurse's shifts by ID
exports.getNurseById = (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT User.Username, Shift.StartTime, Shift.EndTime
    FROM Worker
    INNER JOIN User ON Worker.UserID = User.UserID
    INNER JOIN Shift ON Worker.WorkerID = Shift.WorkerID
    WHERE Worker.WorkerID = ? AND Worker.WorkerType = 'Nurse';`;

  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Error retrieving nurse data' });
    }
    if (results.length === 0) {
      return res.status(404).send({ message: 'Nurse not found' });
    }
    res.status(200).send(results);
  });
};
