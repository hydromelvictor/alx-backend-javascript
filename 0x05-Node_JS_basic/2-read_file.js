const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    let students = [];
    const fields = new Set();
    data = data.split('\n').shift()
    data.forEach(element => {
      const line = element.split(',');
      if (line.length == 4) {
     	 fields.add(line[3]);
     	 students.push(line);
      }
    });
    console.log(`Number of students: ${students.length}`);
    const firstname = [];
    fields.forEach(elt => {
      const studie = students.filter(ps => ps[3] === elt);
      const names = studies.map(ps => ps[0]);
      console.log(`Number of students in ${elt}: ${names.length}. List: ${names.join(',')}`);
    });
  } catch (e) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
