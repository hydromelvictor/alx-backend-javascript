module.exports = class AppController {
    getHomepage(req, res) {
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      return res;
    }
};
