'use strict';
function getRandomFromDice(dice) {
  const diceSet = new Set([
    'd4',
    'd6',
    'd8',
    'd10',
    'd12',
    'd16',
    'd20'
  ]);

  if(!diceSet.has(dice)) return null;

  const diceWithoutD = String(dice).replace('d','');

  const numDice = Number.parseInt(diceWithoutD, 10);

  return Math.floor(Math.random() * numDice)+1;
}