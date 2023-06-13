const express = require('express');

export default app = express();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!')
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(countStudents);
});
