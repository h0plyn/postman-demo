const router = require('express').Router();
const Brand = require('../db/brand');

// Mounted on /api/brands

// GET /api/brands
router.get('/', async (req, res, next) => {
  try {
    const brands = await Brand.findAll();
    res.json(brands);
  } catch (err) {
    next(err);
  }
});

// POST /api/brands
router.post('/', async (req, res, next) => {
  const { name } = req.body;
  try {
    const brands = await Brand.create({ name });
    res.json(brands);
  } catch (err) {
    next(err);
  }
});

// GET /api/brands/:brandId
router.get('/:brandId', async (req, res, next) => {
  const { brandId } = req.params;
  try {
    const brand = await Brand.findByPk(brandId);
    res.json(brand);
  } catch (err) {
    next(err);
  }
});

// PUT /api/brands/:brandId
router.put('/:brandId', async (req, res, next) => {
  const { brandId } = req.params;
  const { name } = req.body;
  try {
    const brand = await Brand.findByPk(brandId);
    const updatedBrand = await brand.update({ name });
    res.json(updatedBrand);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/brands/:brandId
router.delete('/:brandId', async (req, res, next) => {
  const { brandId } = req.params;
  try {
    let toBeDeleted = await Brand.findByPk(brandId);
    await toBeDeleted.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
