const request = require('request');
const app = require('./api');
const { expect } = require('chai');
const { it, describe } = require('mocha');

describe('test request', () => {
  it('test -0', async function() {
    const resp = await request(app)
      .get('/index.html')
      .expect(200);
      const res = resp.body
      expect(res).to.be.an('Welcome to the payment system');
      
  });
});
