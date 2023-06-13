const express = require('express');
const port = 1245;
const hostname = 'localhost';
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('Hello Holberton School!')
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
