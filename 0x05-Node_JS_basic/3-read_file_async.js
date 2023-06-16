const fs = require('fs');

const { resolve } = require('path');
function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          throw Error('Cannot load the database');
        }
        const fields = new Set();
        const students = [];
        data.split('\n').forEach(elt => {
          let line = elt.split(',');
          fields.add(line[3]);
          students.push(line);
        });
        students = students.shift();
        console.log(`Number of students: ${students.length}`);
        const firstname = [];
        fields.forEach(elt => {
          students.forEach(ps => {
            if (ps[3] === elt) {
              firstname.push(ps[0]);
            }
          })
          console.log(`Number of students in ${elt}: ${firstname.length}. List: ${firstname.join(',')}`);
        });
        resolve(students)
      });
    });
  } else {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
