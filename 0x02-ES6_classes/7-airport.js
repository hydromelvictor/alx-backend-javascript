export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') this._name = name;
    if (typeof code === 'string') this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
