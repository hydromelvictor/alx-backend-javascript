const chai = require('chai');
const expect = chai.expect

const sinon = require('sinon');
const Utils = require('./utils');
const { test, it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./5-payment');

describe('test', () => {
    let print;
  test('test -1', () => {
    beforeEach(() => {
        print = sinon.spy(console, 'log');
    });
    sendPaymentRequestToApi(100, 20);
    expect(print.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
    afterEach(() => {
        print.restore();
    });
  });

  test('test -2', () => {
    beforeEach(() => {
        print = sinon.spy(console, 'log');
    });
    sendPaymentRequestToApi(10, 10);
    expect(print.calledOnce).to.be.true;
    expect(console.log('The total is: 20')).to.be.all;
    afterEach(() => {
        print.restore();
    });
  });
});
