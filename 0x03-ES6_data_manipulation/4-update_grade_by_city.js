export default function updateStudentGradeByCity(arrays, city, newGrades) {
  return arrays.map((elt) => {
    if (elt.id === newGrades.studentId) elt.grade = newGrades.grade;
    else elt.grade = 'N/A';
  }).filter((elt) => elt.location  === city);
}
