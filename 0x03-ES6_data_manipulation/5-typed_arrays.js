export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const data = DataView(buffer, 0, length);
  const arrays = new Int8Array(buffer);
  arrays[position] = value;
  return  data;
}
