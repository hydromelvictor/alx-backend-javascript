const express = require('express');

const app = express();
const port = 7865;
const hostname = 'localhost';

app.get('/', (req, res, next) => {
  console.log('API available on localhost port 7865');
  next();
}, (req, res) => {
    res.send('Welcome to the payment system');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
