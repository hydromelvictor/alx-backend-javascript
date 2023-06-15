const chai = require('chai');
const expect = chai.expect

const sinon = require('sinon');
const Utils = require('./utils');
const { test, it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./5-payment');

describe('test', () => {
    let print;

  beforeEach(() => {
    print = sinon.spy(console, 'log');
  });
  it('test -1', () => {
    sendPaymentRequestToApi(100, 20);
    expect(print.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
  });

  it('test -2', () => {
    sendPaymentRequestToApi(10, 10);
    expect(print.calledOnce).to.be.true;
    expect(console.log('The total is: 20')).to.be.all;
  });
  afterEach(() => {
    print.restore();
  });
});
