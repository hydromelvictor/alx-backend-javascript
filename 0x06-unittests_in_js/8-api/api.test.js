const app = require('./api');
const { expect, request } = require('chai');
const { it, describe } = require('mocha');

describe('test request', () => {
  it('test -0', (done) => {
    request(app)
      .get('/index')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
        res.body.length.should.not.be.eq(0);
      done();
      });
  });
});
