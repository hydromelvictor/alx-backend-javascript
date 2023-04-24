export default function getStudentIdsSum(arrays) {
  return arrays.reduce((res, elt) => res + elt.id, 0);
}
