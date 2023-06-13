const http = require('http');
const countStudents = require('./3-read_file_async');
export default app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.end('This is the list of our students\n');
      break;
  }
  res.end(countStudents);
});

app.listen(1245);
