const { it, describe } = require('mocha');
const getApi = require('./6-payment_token');

const chai  = require('chai');
const expect = chai.expect;

describe('async test', () => {
  it('', () => {
    expect(getApi).to.be.an.instanceOf(Promise);
    getApi(true)
    .then(() => {
      expect(getApi.data).to.be.equal('Successful response from the API');
      done();
    });
  });
});
