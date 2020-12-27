const router = require('express').Router();
const oauthRouter = require('./oauth');
const googleRouter = require('./google');
const { User } = require('../db');
const bcrypt = require('bcrypt');

// Mounted on /auth

router.use('/oauth', oauthRouter);
router.use('/google', googleRouter);

// GET /auth/me
router.get('/me', async (req, res, next) => {
  try {
    if (!req.session.userId) {
      if (req.user) {
        console.log('req.user--->', req.user);
        res.json(req.user);
      } else {
        res.sendStatus(401);
      }
    } else {
      const user = await User.findByPk(req.session.userId);
      if (!user) {
        res.sendStatus(401);
      } else {
        res.json(user);
      }
    }
  } catch (err) {
    next(err);
  }
});

// POST /auth/signup
router.post('/signup', async (req, res, next) => {
  console.log(req.body);
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      },
    });

    if (!wasCreated) {
      res.status(409).send('E-mail already exists');
    } else {
      console.log('User Created!');
      res.status(201);
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    console.log(err);
  }
});

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

// DELETE /auth/logout
router.delete('/logout', (req, res, next) => {
  console.log('DESTROYING SESSION->', req.session.userId);
  req.logout();
  req.session.destroy();
  res.sendStatus(204);
});

module.exports = router;
