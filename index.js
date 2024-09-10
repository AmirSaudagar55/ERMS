const express = require('express');
const app = express();
const nurseRoutes = require('./routes/nurseRoutes');
const patientRoutes = require('./routes/patientRoutes');
const treatmentRoutes = require('./routes/treatmentRoutes');


app.use(express.json());


app.use('/api', nurseRoutes);
app.use('/api', patientRoutes);
app.use('/api', treatmentRoutes);


app.get('/', (req, res) => {
  res.send('Emergency Room Management System');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
