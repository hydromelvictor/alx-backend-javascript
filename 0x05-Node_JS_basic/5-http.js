const http = require('http');
const countStudents = require('./3-read_file_async');
const port = 1245;
const hostname = 'localhost';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.end('This is the list of our students\ncountStudents');
      break;
    default:
      break;
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

module.exports = app;
