const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe("calculateNumber function test to 1-calcul", function() {
    it("correct clacul -1", function() {
        assert.equal(calculateNumber('SUM', 0.4, 0.1), 0);
    });

    it("correct clacul -1", function() {
        assert.equal(calculateNumber('SUM', 7.4, 5.9), 13);
    });

    it("correct clacul -1", function() {
        assert.equal(calculateNumber('SUM', 0.7, 2.1), 3);
    });

    it("correct clacul -1", function() {
        assert.equal(calculateNumber('SUM', -0.4, -4.8), -5);
    });

    it("correct calcul -2", function() {
        assert.equal(calculateNumber('SUBTRACT', 5.8, 3.1), 3);
    });

    it("correct calcul -2", function() {
        assert.equal(calculateNumber('SUBTRACT', 5.8, 0.1), 6);
    });

    it("correct calcul -2", function() {
        assert.equal(calculateNumber('SUBTRACT', -5.8, 3.1), -9);
    });

    it("correct calcul -2", function() {
        assert.equal(calculateNumber('SUBTRACT', 5.8, -3.1), 9);
    });

    it("correct calcul -2", function() {
        assert.equal(calculateNumber('SUBTRACT', -5.8, -3.1), -3);
    });

    it("correct calcul -3", function() {
        assert.equal(calculateNumber('DIVIDE', 4, 1.8), 2);
    });

    it("correct calcul -3", function() {
        assert.equal(calculateNumber('DIVIDE', -4, 1.8), -2);
    });

    it("correct calcul -3", function() {
        assert.equal(calculateNumber('DIVIDE', 4, -1.8), -2);
    });

    it("correct calcul -3", function() {
        assert.equal(calculateNumber('DIVIDE', -4, -1.8), 2);
    });

    it("divide error", function() {
        assert.equal(calculateNumber('DIVIDE', 12, 0.4), 'Error');
    });
});
