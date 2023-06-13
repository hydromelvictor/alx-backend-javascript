const process = require('process');
module.exports = function displayMessage(argument) {
  process.stdout.write(argument + '\n');
};
