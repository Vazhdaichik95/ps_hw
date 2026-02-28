'use strict';
class Character {
  constructor (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  talk() {
    console.log(`${this.name} ${this.language}`);
  }
}

class Orc extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  talk() {
    console.log(`${this.name} ${this.language}`.split('').reverse().join(''));
  }

  fight() {
    console.log('fight!!!');
  }
}

class Elf extends Character {
  constructor(race, name, language, magicType) {
    super(race, name, language);
    this.magicType = magicType;
  }

  talk() {
    console.log(`${this.name} ${this.language} with ${this.magicType}`);
  }

  magicFight() {
    console.log('magic fight!!!');
  }
}