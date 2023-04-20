export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](tag) {
    if (tag === 'number') return this._size;
    if (tag === 'string') return this._location;
    return this;
  }
}