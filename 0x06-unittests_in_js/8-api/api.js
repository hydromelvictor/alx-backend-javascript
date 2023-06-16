const express = require('express');

const app = express();
const port = 7865;
const hostname = 'localhost';

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.listen(port, hostname, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
