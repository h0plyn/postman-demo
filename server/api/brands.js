const router = require('express').Router();

// Mounted on /api/brands

// GET /api/brands
router.get('/', (req, res, next) => {
  res.send("You've reached Brands!");
});

module.exports = router;
