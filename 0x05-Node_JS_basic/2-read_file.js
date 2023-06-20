const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = [];
    const fields = new Set();
    const lines = data.trim().split('\n');
    const newlines = [];
    for(let i = 1; i < lines.length; i++) {
       newlines.push(lines[i]);
    }
    newlines.forEach(ys => {
      const line = ys.split(',');
      if (line.length === 4) {
     	 fields.add(line[3]);
     	 students.push(line);
      }
    });
	console.log(fields);
    console.log(`Number of students: ${students.length}`);
    fields.forEach(elt => {
      const studie = students.filter(ps => ps[3] === elt);
      const names = studie.map(ps => ps[0]);
      console.log(`Number of students in ${elt}: ${studie.length}. List: ${names.join(', ')}`);
    });
  } catch(e) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
