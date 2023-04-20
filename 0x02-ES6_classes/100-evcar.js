import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range){
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string' || typeof range !== 'string') throw new Error();
    super(brand, motor, color);
    this._range = range;
  }
  cloneCar() {
    return new Car();
  }
}
