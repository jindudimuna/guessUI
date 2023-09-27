'use strict';

const go = document.querySelector('.submit');
const answer = document.querySelector('.box-answer');

go.addEventListener('click', function (e) {
  e.preventDefault();
  const limit = Number(document.querySelector('.box').value);
  console.log(limit);
  document.querySelector('.options').textContent = 'Start Guessing';

  // answer.value = limit;
});
