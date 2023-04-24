export default function updateStudentGradeByCity(arrays, city, newGrades) {
  return arrays.filter((elt) => elt.location  === city).map((elt) => {
    let grades = newGrades.filter((grd) => grd.studentId == elt.id)
    elt.grade = grades.lenght? grades[0].grade : 'N/A';
    return elt;
  });
}
