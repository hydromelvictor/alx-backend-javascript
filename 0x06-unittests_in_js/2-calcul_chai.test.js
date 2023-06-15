const chai = require('chai');
const { it, describe } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe("calculateNumber function test to 1-calcul", function() {
    it("correct clacul -1", function() {
        expect(calculateNumber('SUM', 0.4, 0.1)).to.equal(0);
    });

    it("correct clacul -1", function() {
        expect(calculateNumber('SUM', 7.4, 5.9)).to.equal(13);
    });

    it("correct clacul -1", function() {
        expect(calculateNumber('SUM', 0.7, 2.1)).to.equal(3);
    });

    it("correct clacul -1", function() {
        expect(calculateNumber('SUM', -0.4, -4.8)).to.equal(-5);
    });

    it("correct calcul -2", function() {
        expect(calculateNumber('SUBTRACT', 5.8, 3.1)).to.equal(3);
    });

    it("correct calcul -2", function() {
        expect(calculateNumber('SUBTRACT', 5.8, 0.1)).to.equal(6);
    });

    it("correct calcul -2", function() {
        expect(calculateNumber('SUBTRACT', -5.8, 3.1)).to.equal(-9);
    });

    it("correct calcul -2", function() {
        expect(calculateNumber('SUBTRACT', 5.8, -3.1)).to.equal(9);
    });

    it("correct calcul -2", function() {
        expect(calculateNumber('SUBTRACT', -5.8, -3.1)).to.equal(-3);
    });

    it("correct calcul -3", function() {
        expect(calculateNumber('DIVIDE', 4, 1.8)).to.equal(2);
    });

    it("correct calcul -3", function() {
        expect(calculateNumber('DIVIDE', -4, 1.8)).to.equal(-2);
    });

    it("correct calcul -3", function() {
        expect(calculateNumber('DIVIDE', 4, -1.8)).to.equal(-2);
    });

    it("correct calcul -3", function() {
        expect(calculateNumber('DIVIDE', -4, -1.8)).to.equal(2);
    });

    it("divide error", function() {
        expect(calculateNumber('DIVIDE', 12, 0.4)).to.equal('Error');
    });
});
