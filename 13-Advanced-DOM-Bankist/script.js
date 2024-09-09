'use strict';
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
// cookie message
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies to improve functions and analitiks <button class="btn btn--close-cookie">I got it </button>`;
document.querySelector('header').append(message);
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});
*/

///////////////////////////////////////////////////////
// lecrtures

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log(e.currentTarget);
  e.currentTarget.style.backgroundColor = randomColor();
});
