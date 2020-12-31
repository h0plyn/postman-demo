require('regenerator-runtime/runtime');
const request = require('supertest');
const { expect } = require('chai');
const app = require('../../server');

describe('GET /api/products', (done) => {
  it('should display a string', (done) => {
    request(app)
      .get('/api/products')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.text);
        expect(res.text).to.be.a('string').to.equal("You've reached Products!");
        done();
      });
  });
});
