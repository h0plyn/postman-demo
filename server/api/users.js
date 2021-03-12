const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../db/user');

// Mounted on /api/users

// GET /api/users
router.get('/', (req, res, next) => {
  res.json("You've reached Users!");
});

// POST /api/users
router.post('/', async (req, res, next) => {
  // const { name, email, password } = req.query;
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
