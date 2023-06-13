const express = require('express');

export default app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('Hello Holberton School!')
});

app.listen(1245);
