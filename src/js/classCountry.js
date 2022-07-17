export class Country {
  constructor({ flags, name, capital, population, languages } = {}) {
    this._flags = flags.svg;
    this._name = name.official;
    this._capital = capital;
    this._population = population;
    this._languages = languages;
  }

  get flag() {
    return this._flags;
  }
  set flag(newFlag) {
    this._flags = newFlag;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  get capital() {
    return this._capital.join('');
  }
  set capital(newCapital) {
    this._capital = newCapital;
  }

  get population() {
    return this._population;
  }
  set population(newPopulation) {
    this._population = newPopulation;
  }

  get languages() {
    return Object.values(this._languages).join(', ');
  }
  set languages(newLanguag) {
    this._languages = newLanguag;
  }
}
