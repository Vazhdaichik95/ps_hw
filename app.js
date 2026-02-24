'use strict';
class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  set mileage (mils) {
    this.#mileage = mils;
  }

  get mileage () {
    return this.#mileage;
  }

  info() {
    console.log(`${this.#brand} ${this.#model} - пробег ${this.#mileage} км`);
  }
}

const kia = new Car('KIA', 'Seltos', 58787);
const hyundai = new Car('HYUNDAI', 'IX35', 127456);

kia.mileage = 59600;
kia.info();

hyundai.info();