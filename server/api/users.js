const router = require('express').Router();
const bcrypt = require('bcrypt');

// Mounted on /api/users

// GET /api/users
router.get('/', (req, res, next) => {
  res.json("You've reached Users!");
});

// POST /api/users

router.post('/', async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log('hashed', hashedPassword);

  // const decrypted = await bcrypt.compare(
  //   req.body.password,
  //   hashedPassword,
  //   function (err, result) {
  //     // result == true
  //     if (result) {
  //       return result;
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // );
  // console.log('DECRYPTED', decrypted);
  // res.send('New user created!');
});

module.exports = router;
