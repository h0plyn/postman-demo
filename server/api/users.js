const router = require('express').Router();

// Mounted on /api/users

// GET /api/users
router.get('/', (req, res, next) => {
  res.send("You've reached Users!");
});

module.exports = router;
