const router = require('express').Router();

// Mounted on /api/puppies

// GET mounted on /api/users
router.get('/', (req, res, next) => {
  res.send("You've reached Users!");
});

module.exports = router;
