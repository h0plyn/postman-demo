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
  const { name, location, category } = req.body;
  console.log(typeof name);
  try {
    const brands = await Brand.create({ name, location, category });
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

  try {
    const brand = await Brand.findByPk(brandId);
    const updatedBrand = await brand.update(req.body);
    res.json(updatedBrand);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/brands/:brandId
router.delete('/:brandId', async (req, res, next) => {
  const { brandId } = req.params;
  try {
    let deleteBrand = await Brand.findByPk(brandId);
    await deleteBrand.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
