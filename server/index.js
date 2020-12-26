const express = require('express');
const session = require('express-session');
const app = express();
const db = require('./db/db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });
const path = require('path');
const apiRoutes = require('./api');
const passport = require('passport');
const authRoutes = require('./auth');
require('../secret');

const volleyball = require('volleyball');
app.use(volleyball);

dbStore.sync();

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'beaverCr33kSt33l',
    store: dbStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes);
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
