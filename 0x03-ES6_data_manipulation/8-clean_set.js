export default function cleanSet(set, startString) {
  let res = [];
  for (const elt of set) {
    if (elt.startsWith(startString)) {
      res.push(elt.slice(startString.length));
    }
  }
  return res.join('-');
}
