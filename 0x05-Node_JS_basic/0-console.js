const process = require('process');
export default function displayMessage(argument) {
    process.stdout.write(argument + '\n');
}
