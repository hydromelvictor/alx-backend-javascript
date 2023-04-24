export default function getStudentsByLocation(arrays, city) {
  return arrays.filter((elt) => elt.location  === city);
}