const http = require('http');
const countStudents = require('./3-read_file_async');
const port = 1245;
const hostname = 'localhost';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.write('Hello Holberton School!');
      res.end();
      break;
    case '/students':
      res.write('This is the list of our students\n');
      res.end();
      try {
        countStudents(process.argv[2])
      } catch (error) {
        res.end(error.message);
      }
      break;
    default:
      break;
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

module.exports = app;
