const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./api');

const volleyball = require('volleyball');

app.use(volleyball);

// Sends us to the index.html
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

// Mounted on /
app.get('*', (req, res) => {
  res.send('We are at the home route.');
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(500);
});

module.exports = app;
