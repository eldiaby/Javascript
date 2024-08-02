'use strict';
// selection elements
const player00Ele = document.querySelector('.player--0');
const player01Ele = document.querySelector('.player--1');
const scorePlayer00 = document.querySelector('#score--0');
const scorePlayer01 = document.querySelector('#score--1');
const current00ScoreEle = document.getElementById('current--0');
const current01ScoreEle = document.getElementById('current--1');
const diceEle = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currnetScore, activePlayer, playing;

// starting sittings
const startingSittings = function () {
  scores = [0, 0];
  currnetScore = 0;
  activePlayer = 0;
  playing = true;

  scorePlayer00.textContent = 0;
  scorePlayer01.textContent = 0;
  current00ScoreEle.textContent = 0;
  current01ScoreEle.textContent = 0;

  diceEle.classList.add('hiddin');
  player00Ele.classList.remove('player--winner');
  player00Ele.classList.add('player--active');
  player01Ele.classList.remove('player--winner');
  player01Ele.classList.remove('player--active');
};

startingSittings();
// ===============================================================//
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  currnetScore = 0;
  player00Ele.classList.toggle('player--active');
  player01Ele.classList.toggle('player--active');
};

//  rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1-generate a randome dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2-display the dice
    diceEle.classList.remove('hiddin');
    diceEle.src = `dice-${dice}.png`;
    // console.log(dice); // was for just testing the functionality

    // 3- chick the dice = 1 switch to the other player
    if (dice !== 1) {
      // Add the dice to the score
      currnetScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currnetScore;
    } else {
      //  switch to the other player
      switchPlayer();
    }
  }
});

// functionality of the hold button
btnHold.addEventListener('click', () => {
  if (playing) {
    // 1-add the currnet score to the active player Score
    scores[activePlayer] += currnetScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2-check if the active player score is <=100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEle.classList.add('hiddin');
      // true finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      // false
      switchPlayer();
    }
  }
});

// ressting the game
btnNew.addEventListener('click', startingSittings);
