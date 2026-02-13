'use strict';
function getRandomFromDice(dice) {
  const diceWithoutD = String(dice).replace('d','');
  if (Number.isFinite(diceWithoutD)) return null;

  const numDice = Number.parseInt(diceWithoutD, 10);

  if(numDice<4 || numDice>20) return null;

  return Math.floor(Math.random()*(numDice-1+1)+1);
}
