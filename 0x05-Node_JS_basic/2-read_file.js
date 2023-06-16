const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    let students = [];
    const fields = new Set();
    data.split('\n').forEach(element => {
      const line = element.split(',');
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
      });
      console.log(`Number of students in ${elt}: ${firstname.length}. List: ${firstname.join(',')}`);
    });
  } catch (e) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
