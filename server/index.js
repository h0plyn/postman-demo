const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./api');
const volleyball = require('volleyball');
app.use(volleyball);

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

// Mounted on /
app.get('*', (req, res) => {
  res.send('We are at the home route.');
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500);
});

module.exports = app;
