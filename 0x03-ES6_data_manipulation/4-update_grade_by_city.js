export default function updateStudentGradeByCity(arrays, city, newGrades) {
  return arrays.filter((elt) => elt.location === city).map((arr) => {
    const grades = newGrades.filter((grd) => grd.studentId === arr.id);
    const grade = grades.lenght ? grades[0].grade : 'N/A';
    return {...arr, grade};
  });
}
