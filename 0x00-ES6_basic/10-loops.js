export default function appendToEachArrayValue(array, appendString) {
  for(const idx of array) {
    let value = array[idx];
    array.push(appendString + value);
  }
  return array;
}
