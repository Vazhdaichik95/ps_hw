'use strict';
const request1 = new XMLHttpRequest();

request1.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');

request1.send();

request1.addEventListener('load', function() {
  const response1 = JSON.parse(this.responseText);

  const url2 = response1.abilities[0].ability.url;

  const request2 = new XMLHttpRequest();

  request2.open('GET', url2);

  request2.send();

  request2.addEventListener('load', function() {
    const response2 = JSON.parse(this.responseText);

    const effectInEnglish = response2.effect_entries.find((effect) => effect.language.name === 'en');

    console.log(effectInEnglish.effect);
  })
});