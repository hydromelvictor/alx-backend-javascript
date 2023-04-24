export default function cleanSet(set, startString) {
  let res = [];
  if (!startString || !startString.length) return res;
  for (const elt of set) {
    if (elt && elt.startsWith(startString)) {
      res.push(elt.slice(startString.length));
    }
  }
  return res.join('-');
}
