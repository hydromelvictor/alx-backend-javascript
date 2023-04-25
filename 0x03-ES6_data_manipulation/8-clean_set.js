export default function cleanSet(set, startString) {
  const res = [];
  if (!startString || !startString.length) return '';
  for (const elt of set) {
    if (elt && elt.startsWith(startString)) {
      res.push(elt.slice(startString.length));
    }
  }
  return res.join('-');
}
