const connection = require('../config/db');

const createTables = () => {
  const createUserTable = `
    CREATE TABLE IF NOT EXISTS User (
      UserID INT PRIMARY KEY AUTO_INCREMENT,
      Username VARCHAR(100) NOT NULL,
      Password VARCHAR(100) NOT NULL,
      Email VARCHAR(100),
      PhoneNumber VARCHAR(15)
    );`;

  const createWorkerTable = `
    CREATE TABLE IF NOT EXISTS Worker (
      WorkerID INT PRIMARY KEY AUTO_INCREMENT,
      UserID INT,
      WorkerType ENUM('Receptionist', 'Nurse', 'Doctor') NOT NULL,
      FOREIGN KEY (UserID) REFERENCES User(UserID)
    );`;

  const createShiftTable = `
    CREATE TABLE IF NOT EXISTS Shift (
      ShiftID INT PRIMARY KEY AUTO_INCREMENT,
      WorkerID INT,
      StartTime DATETIME,
      EndTime DATETIME,
      FOREIGN KEY (WorkerID) REFERENCES Worker(WorkerID)
    );`;

  const createPatientTable = `
    CREATE TABLE IF NOT EXISTS Patient (
      PatientID INT PRIMARY KEY AUTO_INCREMENT,
      FirstName VARCHAR(100),
      LastName VARCHAR(100),
      Address TEXT,
      PhoneNumber VARCHAR(15)
    );`;

  const createTreatmentTable = `
    CREATE TABLE IF NOT EXISTS Treatment (
      TreatmentID INT PRIMARY KEY AUTO_INCREMENT,
      PatientID INT,
      DoctorID INT,
      Medication VARCHAR(255),
      TreatmentDate DATETIME,
      FOREIGN KEY (PatientID) REFERENCES Patient(PatientID),
      FOREIGN KEY (DoctorID) REFERENCES Worker(WorkerID)
    );`;

  // Run each create table statement
  connection.query(createUserTable, (err, result) => {
    if (err) throw err;
    console.log('User Table Created');
  });

  connection.query(createWorkerTable, (err, result) => {
    if (err) throw err;
    console.log('Worker Table Created');
  });

  connection.query(createShiftTable, (err, result) => {
    if (err) throw err;
    console.log('Shift Table Created');
  });

  connection.query(createPatientTable, (err, result) => {
    if (err) throw err;
    console.log('Patient Table Created');
  });

  connection.query(createTreatmentTable, (err, result) => {
    if (err) throw err;
    console.log('Treatment Table Created');
  });
};

createTables();

