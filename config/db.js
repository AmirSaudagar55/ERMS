const mysql = require('mysql2');


const connectionUri = process.env.connectionUri;

const connection = mysql.createConnection(connectionUri);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

});
