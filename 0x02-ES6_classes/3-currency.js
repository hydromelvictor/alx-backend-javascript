export default class Currency {
  constructor(name, code) {
    if (typeof name === 'string') this._name = name;
    if (typeof code === 'string') this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  set code(code) {
    this._code = code;
  }

  displayFullCurrency() {
    return this._name + '(' + this._code + ')';
  }
}