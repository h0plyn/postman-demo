const router = require('express').Router();
const passport = require('passport');
const User = require('./../db/user');
require('../../secret');

passport.serializeUser((user, done) => {
  console.log('Serialized');
  console.log(user);
  // Check user ID?
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserialized');
  try {
    const user = await User.findById(id);
    console.log(user);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = router;
