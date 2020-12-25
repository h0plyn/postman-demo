const { db } = require('./server/db');
const app = require('./server');
const PORT = process.env.PORT || 1337;

db.sync().then(() => {
  console.log('db synced');

  app.listen(PORT, () => {
    console.log(`Serving up an eComm app from PORT ${PORT}`);
  });
});
