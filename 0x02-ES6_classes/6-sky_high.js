import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new Error();
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }
  
  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
