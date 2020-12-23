const Sequelize = require('sequelize');
const db = require('./db');

const Users = db.define('users', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = Users;
