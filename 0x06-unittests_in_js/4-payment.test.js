const chai = require('chai');
expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./4-payment');

describe("test sendPaymentRequestToApi function", function() {
  const print = sinon.stub(console, 'log');
  it("verify", function() {
    const stubcalc = sinon.stub(Utils, 'calculateNumber');
    stubcalc.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(print.calledOnce).to.be.true;
    expect(console.log('The total is: 10')).to.be.all;
    print.restore();
    stubcalc.restore();
  });
});
