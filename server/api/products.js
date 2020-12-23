const router = require('express').Router();

// Mounted on /api/products

// GET /api/products
router.get('/', (req, res, next) => {
  res.send("You've reached Products!");
});

module.exports = router;
