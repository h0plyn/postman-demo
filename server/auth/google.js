const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../db');
if (process.env.NODE_ENV === 'development') {
  require('./secret');
}

// Mounted on /auth/google

// GET /auth/google
router.get('/', passport.authenticate('google', { scope: 'email' }));

// GET /auth/google/callback
router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/',
  })
);

module.exports = router;
