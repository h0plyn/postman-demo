const Sequelize = require('sequelize');
const db = require('./db');

const Brand = db.define('brand', {
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
});

module.exports = Brand;
