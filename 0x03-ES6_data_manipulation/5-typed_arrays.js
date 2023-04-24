export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(value);
  return new Uint8Array(buffer, position, length);
}
