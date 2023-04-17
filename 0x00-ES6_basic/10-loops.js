export default function appendToEachArrayValue(array, appendString) {
  const tab = []
  for(const idx of array) {
    let value = array[idx];
    tab.push(appendString + value);
  }
  return tab;
}
