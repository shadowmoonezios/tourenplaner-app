const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tourenplaner', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});