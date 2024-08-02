'use strict';
// console.log(document.querySelector('.message'))

let guestNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
function displayMessege(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess');
  //whem the guess is empty
  if (!guess.value) {
    displayMessege('no number');

    //whem the guess is correct
  } else if (Number(guess.value) === guestNumber) {
    displayMessege('Corrent number');
    document.querySelector('.number').textContent = guestNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (Number(guess.value) !== guestNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = (Number(guess.value) > guestNumber) ? 'Too high' : 'too low';
      displayMessege((Number(guess.value) > guestNumber) ? 'Too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessege('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } 
  // //whem the guess is heitht
  // else if (Number(guess.value) > guestNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

    //whem the guess is low
  // } else if (Number(guess.value) < guestNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});


////////////////////////////////////////////////////////
// challinge (reset btn functionality)

document.querySelector('.again').addEventListener('click', function () {
  guestNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessege('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
})