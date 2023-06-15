const request = require('request');
const { app, port, hostname, response } = require('./api');
const url = `http://${hostname}:${port}/index.html`;
const { expect } = require('chai');
const { it, describe } = require('mocha');

describe('test request', () => {
  it('test -0', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('test -1', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
