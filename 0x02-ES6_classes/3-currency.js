export default class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') throw new Error();
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') throw new Error();
    this._code = code;
  }

  displayFullCurrency() {
    return this._name + '(' + this._code + ')';
  }
}