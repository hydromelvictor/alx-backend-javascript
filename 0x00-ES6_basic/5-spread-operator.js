export default function concatArrays (array1, array2, string) {
  retrun ([...array1, ...array2, ...string.join(',')].join());
}
