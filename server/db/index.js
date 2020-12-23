const db = require('./db');
const Brand = require('./brand');
const Product = require('./product');
const User = require('./user');

Brand.hasMany(Product);
Product.belongsTo(Brand);

module.exports = {
  db,
  User,
  Brand,
  Product,
};
