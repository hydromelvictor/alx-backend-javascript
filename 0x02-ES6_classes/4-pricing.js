import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !(currency instanceof Currency)) throw new Error();
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new Error();
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) throw new Error();
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} ${this._currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new Error();
    return amount * conversionRate;
  }
}
