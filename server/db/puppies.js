const Sequelize = require('sequelize');
const db = require('./db');

const Puppies = db.define('puppies', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.STRING,
  },
  breed: {
    type: Sequelize.STRING,
  },
});

module.exports = Puppies;
