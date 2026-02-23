'use strict';
function Character (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.talk = function () {
  console.log(`${this.name} ${this.language}`);
}

function Ork (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
} 

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;


Ork.prototype.fight = function () {
  console.log('fight!!!');
}

function Elf (race, name, language, magicType) {
  Character.call(this, race, name, language);
  this.magicType = magicType;
} 

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.magicFight = function () {
  console.log('magic fight!!!');
}