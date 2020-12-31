require('regenerator-runtime/runtime');
const request = require('supertest');
const { expect } = require('chai');
const app = require('../../server');

describe('GET /api/users', () => {
  it('should return a JSON object', (done) => {
    request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("should equal `You've Reached Users!`", (done) => {
    request(app)
      .get('/api/users')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.equal("You've reached Users!");
        done();
      });
  });
});
