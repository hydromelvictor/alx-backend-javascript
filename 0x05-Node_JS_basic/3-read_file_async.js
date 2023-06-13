const fs = require('fs');
module.exports = function countStudents(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error('Cannot load the database');
    } else {
      const line = data.trim().split('\n');
      const headers = line[0].split(',');
      let body = [];
      for (let i = 1; i < line.length; i++) {
        rows = {};
        row = line[i].split(',');
        for (let j = 0; j < headers.length; j++) {
          rows[headers[j]] = row[j];
        }
        body.push(rows);
      }
      fields = new set();
      for (let i = 0; i < body.length; i++) {
        if (!fields.has(body[i].field)) {
          fields.add(body[i].field);
        }
      }
      console.log(`Number of students: ${line.length}`);
      for (let i = 0; i < fields.length; i++) {
        let name = [];
        for (let j = 0; j < body.length; j++) {
          if (body[j].field === fields[i]) {
            name.push(body[j].firstname);
          }
        }
        console.log(`Number of students in FIELD: ${name.length}. List: ${name}`);
      }
    }
  });
};
