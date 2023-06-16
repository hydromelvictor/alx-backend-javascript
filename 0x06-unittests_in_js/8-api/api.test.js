const app = require('./api');
const { expect, request } = require('chai');
const { it, describe } = require('mocha');
const request = require('request');
const url = 'http://localost:7865/'

describe('test request', () => {
  it('test -0', (done) => {
    request(url)
      .get(url, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
  });
});
