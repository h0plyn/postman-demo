const router = require('express').Router();

// Mounted on /api/puppies

// GET mounted on /api/puppies
router.get('/', (req, res, next) => {
  res.send("You've reached Puppies!");
});

module.exports = router;
