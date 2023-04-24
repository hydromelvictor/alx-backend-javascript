export default function cleanSet(set, startString) {
  let res = [];
  for (const elt of set) {
    if (elt.indexOf(startString) == 0) {
      res.push(elt.slice(startString.length + 1));
    }
  }
  return res.join('-');
}
