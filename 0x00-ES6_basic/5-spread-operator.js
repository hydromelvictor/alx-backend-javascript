export default function concatArrays (array1, array2, string) {
  arr = [...array1, ...array2, ...string];
  return arr;
}
