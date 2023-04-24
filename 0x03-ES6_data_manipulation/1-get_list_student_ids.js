export default function getListStudentIds(arrays) {
  if (Array.isArray(arrays)) return arrays.map((elt) => elt.id);
  return [];
}
