const process = require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});