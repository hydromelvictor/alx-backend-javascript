export default function updateStudentGradeByCity(arrays, city, newGrades) {
  return arrays.filter((elt) => elt.location === city).map((elt) => {
    const grades = newGrades.filter((grd) => grd.studentId === elt.id);
    grade = grades.lenght ? grades[0].grade : 'N/A';
    return {...elt, grade};
  });
}
