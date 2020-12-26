const router = require('express').Router();
const oauthRouter = require('./oauth');
const { User } = require('../db');
const bcrypt = require('bcrypt');

// Mounted on /auth

router.use('/oauth', oauthRouter);

// PUT /auth/login

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    console.log('User Found! ->', user);

    if (!user) {
      res.status(401).send('User e-mail not found.');
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      console.log('Logged In!');
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    } else {
      res.status(401).end('Incorrect password');
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
