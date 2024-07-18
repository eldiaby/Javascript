'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModals = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden')
}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden')
}

for (let i = 0; i < btnShowModals.length; i++) {
  btnShowModals[i].addEventListener('click', openModal)
}

btnCloseModel.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)


document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape' && !modal.classList.contains('hidden'))
      closeModal();
})