const db = require('./db');
const Kittens = require('./kittens');
const Puppies = requre('./puppies');
const Users = require('./users');

Users.hasMany(Puppies);
Puppies.belongsTo(Users);

Users.hasMany(Kittens);
Kittens.belongsTo(Users);

module.exports = {
  db,
  Users,
  Kittens,
  Puppies,
};
