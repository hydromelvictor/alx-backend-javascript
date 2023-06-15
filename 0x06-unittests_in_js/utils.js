const Utils = {
    calculateNumber: function calculateNumber(type, a, b) {
        const rn_a = Math.round(a);
        const rn_b = Math.round(b);
        if (type === 'SUM') {
          return rn_a + rn_b;
        }
        if (type === 'SUBTRACT') {
          return rn_a - rn_b;
        }
        if (type === 'DIVIDE') {
          if (rn_b === 0) {
              return 'Error';
          } else {
              return rn_a / rn_b;
          }
        }
    }
};

module.exports = Utils
