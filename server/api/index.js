const router = require('express').Router();

// Mounted on /api

router.use('/puppies', require('./puppies'));
router.use('/kittens', require('./kittens'));
router.use('/users', require('./users'));

router.use((req, res, next) => {
  const err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

module.exports = router;
