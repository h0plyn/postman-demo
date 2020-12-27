const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../db');
if (process.env.NODE_ENV === 'development') {
  // require('./../../secret');
}
require('./../../secret');

// Mounted on /auth/google

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.URL,
    },
    async (token, refreshToken, profile, done) => {
      try {
        const [user] = await User.findOrCreate({
          where: {
            google_id: profile.id,
          },
          defaults: {
            email: profile.emails[0].value,
            imageUrl: profile.photos[0].value,
          },
        });
        console.log(user);
        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

// GET /auth/google
router.get('/', passport.authenticate('google', { scope: 'email' }));

// GET /auth/google/callback
router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/notfound',
  })
);

module.exports = router;
