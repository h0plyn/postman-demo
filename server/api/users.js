const router = require('express').Router();
const bcrypt = require('bcrypt');

// Mounted on /api/users

// GET /api/users
router.get('/', (req, res, next) => {
  res.send("You've reached Users!");
});

// POST /api/users

router.post('/', async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);
  res.send('New user created!');
});

module.exports = router;
