const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe("calculateNumber function test", function() {
  it("1 and 0", function() {
    assert.equal(calculateNumber(1, 0), 1);
  });

  it("right less than 5 and", function() {
    assert.equal(calculateNumber(7.1, 2), 9);
  });

  it("snd test", function() {
    assert.equal(calculateNumber(0.4, 3), 3);
  });

  it("third test", function() {
    assert.equal(calculateNumber(1.7, 2.6), 5);
  });

  it("fourth test", function() {
    assert.equal(calculateNumber(5.4, 3.2), 8);
  });

  it("fifth test", function() {
    assert.equal(calculateNumber(-1.2, 6), 5);
  });
});
