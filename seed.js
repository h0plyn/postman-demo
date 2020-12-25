const { db, Product, User, Brand } = require('./server/db');
const faker = require('faker');

// Development Dummy Data
const products = [
  {
    name: 'MacbookPro',
  },
  {
    name: 'Recon Fly Rod',
  },
  {
    name: 'Eames Lounge and Ottoman',
  },
  {
    name: 'Coffee Beans',
  },
];

const brands = [
  {
    name: 'Apple',
  },

  {
    name: 'Orvis',
  },
  {
    name: 'Herman Miller',
  },
  {
    name: 'Blue Bottle',
  },
];

const users = [
  {
    name: 'Ricky',
  },

  {
    name: 'Garrett',
  },
  {
    name: 'Kaitlin',
  },
  {
    name: 'Kylie',
  },
];

const seed = async () => {
  try {
    await db.sync();

    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );

    await Promise.all(
      brands.map((brand) => {
        return Brand.create(brand);
      })
    );

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    // Development Dummy Data
    const macbook = await Product.findByPk(1);
    const flyrod = await Product.findByPk(2);
    const eames = await Product.findByPk(3);
    const coffee = await Product.findByPk(4);

    const apple = await Brand.findByPk(1);
    const orvis = await Brand.findByPk(2);
    const hermanMiller = await Brand.findByPk(3);
    const blueBottle = await Brand.findByPk(4);

    const currentBrand = await Brand.findByPk(1);
    // console.log(Object.keys(currentBrand.__proto__));

    await apple.addProduct(macbook);
    await orvis.addProduct(flyrod);
    await hermanMiller.addProduct(eames);
    await blueBottle.addProduct(coffee);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
