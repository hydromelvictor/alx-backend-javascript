const { it, describe } = require('mocha');
const getApi = require('./6-payment_token');

const chai  = require('chai');
const expect = chai.expect;

describe('async test', () => {
  it('', (done) => {
    expect(getApi(true)).to.equal({data: 'Successful response from the API' });
    done();
  });
});
