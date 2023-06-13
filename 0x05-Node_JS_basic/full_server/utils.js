const fs = require('fs/promises');

module.exports = function readDatabase(file_path) {
  fs.readFile(file_path, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const line = data.trim().split('\n');
      const headers = line[0].split(',');
      let body = [];
      for (let i = 0; i < line.length; i++) {
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
      let fields_obj = {};
      for (let i = 0; i < fields.length; i++) {
        let name = [];
        for (let j = 0; j < body.length; j++) {
          if (body[j].field === fields[i]) {
            name.push(body[j].firstname);
          }
        }
        fields_obj[fields[i]] = name;
      }
      return fields_obj;
    }
  });
}
