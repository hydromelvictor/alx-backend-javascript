const fs = require('fs');

const { resolve } = require('path');
function countStudents(path) {
  return new Promise((resolve) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
       } else {
        const fields = new Set();
        const students = [];
        data = data.trim().split('\n');
        const newlines = [];
        for (let i = 1; i < data.length; i++) {
          newlines.push(data[i]);
        }
        newlines.forEach(elt => {
          let line = elt.split(',');
          if (line.length === 4) { 
            fields.add(line[3]);
            students.push(line);
	  }
        });
        console.log(`Number of students: ${students.length}`);
        fields.forEach(elt => {
  	  const studie = students.filter(ys => ys[3] === elt);
	  const names = studie.map(ws => ws[0]);
          console.log(`Number of students in ${elt}: ${names.length}. List: ${names.join(',')}`);
        });
      }
    });
  });
}

module.exports = countStudents;
