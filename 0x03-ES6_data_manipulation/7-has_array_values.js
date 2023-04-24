export default function hasValuesFromArray(newset, arrays) {
  for (const elt of arrays) {
    if (!newset.has(elt)) return false;
  }
  return true;
}
