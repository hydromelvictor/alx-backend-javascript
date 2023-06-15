const chai = require('chai');
const expect = chai.expect

const sinon = require('sinon');
const Utils = require('./utils');
const { test, it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./5-payment');

describe('test', () => {
  const print = sinon.spy(console, 'log');
  test('test -1', () => {
    beforeEach(() => {
        const calc = sinon.stub(Utils, 'calculNumber');
        calc.withArgs('SUM', 100, 20).returns(120);
    });
    sendPaymentRequestToApi(100, 20);
    expect(print.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
    afterEach(() => {
        print.restore();
        calc.restore();
    });
  });

  test('test -2', () => {
    beforeEach(() => {
        const calc = sinon.stub(Utils, 'calculNumber');
        calc.withArgs('SUM', 10, 10).returns(20);
    });
    sendPaymentRequestToApi(10, 10);
    expect(print.calledOnce).to.be.true;
    expect(console.log('The total is: 20')).to.be.all;
    afterEach(() => {
        print.restore();
        calc.restore();
    });
  });
});
