const router = require('express').Router();

// Mounted on /api/kittens

// GET mounted on /api/kittens
router.get('/', (req, res, next) => {
  res.send("You've got Kittens");
});

module.exports = router;
