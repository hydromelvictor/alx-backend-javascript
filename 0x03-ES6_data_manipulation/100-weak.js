export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  let nbre = 0;
  for (const elt of weakMap) {
    if (elt === endpoint) nbre++;
    if (nbre > 5) throw new Error('Endpoint load is high');
  }
  return nbre;
}
