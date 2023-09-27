'use strict';

const artist = document.querySelector('.box');
const go = document.querySelector('.submit');
const album = document.querySelector('.box-b');
const check = document.querySelector('.submit-b');
const gameState = document.querySelector('.box-answer');

let guess = 'taylor swift';

go.addEventListener('click', function (e) {
  e.preventDefault();
  if (artist.value.toLowerCase() == guess.toLocaleLowerCase()) {
    album.style.opacity = 100;
    check.style.opacity = 100;
    gameState.textContent = `Yay, it is ${artist.value}, now guess the album`;
  } else {
    gameState.textContent = `Nah, it's not ${artist.value}`;
  }
});
