export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') this._size = size;
    if (typeof size === 'string') this._location = location;
  }

  [Symbol.toPrimitive](tag) {
    if (tag === 'number') return this._size;
    if (tag === 'string') return this._location;
  }
}