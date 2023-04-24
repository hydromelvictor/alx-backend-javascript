export default function updateStudentGradeByCity(arrays, city, newGrades) {
  return arrays.filter((elt) => elt.location  === city).map((elt) => {
    if (elt.id === newGrades.studentId) elt.grade = newGrades.grade;
    else elt.grade = 'N/A';
  });
}
