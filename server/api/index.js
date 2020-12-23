const router = require('express').Router();

// Mounted on /api

router.use('/products', require('./products'));
router.use('/brands', require('./brands'));
router.use('/users', require('./users'));

router.use((req, res, next) => {
  const err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

module.exports = router;
