const { db, Puppies, Users } = require('./server/db');
const faker = require('faker');

// Development Dummy Data
const robots = [
  {
    name: 'Falcon 9',
  },
  {
    name: 'Falcon Heavy',
  },
  {
    name: 'Dragon',
  },
  {
    name: 'Starship',
  },
];

const projects = [
  {
    name: 'Rideshare Program',
  },

  {
    name: 'Human Spaceflight',
  },

  {
    name: 'Starlink Launch',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      robots.map((robot) => {
        return Users.create(robot);
      })
    );

    await Promise.all(
      projects.map((project) => {
        return Puppies.create(project);
      })
    );

    // Development Dummy Data
    const falcon = await Users.findByPk(1);
    const falconHeavy = await Users.findByPk(2);
    const dragon = await Users.findByPk(3);
    const starship = await Users.findByPk(4);

    const humanSpaceflight = await Puppies.findByPk(2);
    const cargoLaunch = await Puppies.findByPk(3);
    const rideshare = await Puppies.findByPk(1);

    await humanSpaceflight.setUser(dragon);
    await cargoLaunch.setUser(starship);
    await dragon.addPuppies([rideshare]);
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
