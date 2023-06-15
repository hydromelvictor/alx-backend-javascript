const app = require('./api');
const { expect, request } = require('chai');
const { it, describe } = require('mocha');

describe('test request', () => {
  it('test -0', (done) => {
    request(app)
      .get('/index')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.equal('Welcome to the payment system');
      });
      done();
  });
});
