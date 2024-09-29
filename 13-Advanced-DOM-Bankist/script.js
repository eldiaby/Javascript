'use strict';
/*
// lecrtures
// 1.selction elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section'));
const section3 = document.getElementById('section--3');
console.log(section3);
const allBtns = document.getElementsByTagName('button');
const btns = document.getElementsByClassName('btn');
console.log(btns);

// 2.creating and inserting the html elements
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
// header.append(message.cloneNode(true));
// header.after(message);
// header.before(message);
setTimeout(() => {
  header.append(message);
  // 3.delete elements
  document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    console.log('cookie message has been deleted');
    message.remove();
  });
}, 3000);

// styling
message.style.backgroundColor = '#37383d';
// message.style.borderRadius = '2.8rem';
message.style.width = '120%';

// Events

const alerth1 = () => {
  alert('you have entered the main page heading and fire the event :D');
  };
  document.querySelector('h1').addEventListener('click', alerth1);
  
  setTimeout(
  () => document.querySelector('h1').removeEventListener('click', alerth1),
  5000
  );
  
  // Dom traversing
  // children
  const h1 = document.querySelector('h1');
  console.log(h1);
  h1.querySelectorAll('span').forEach(el => (el.style.color = 'red'));
  h1.firstElementChild.style.color = 'white';
  console.log(h1.childNodes);
  
  // parents
  h1.closest('.header').style.background = 'var(--gradient-secondary)';
  h1.closest('h1').style.background = 'var(--gradient-primary)';
  
  // sibbings
  
  [...h1.parentElement.children].forEach(el => {
    if (el !== h1) el.style.transform = 'scale(0.5)';
  });
  */
//==================================================//
// the main application (The application)
// variables (elements decleration)

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const allSections = document.querySelectorAll('.section');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// naveigation

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// buttons scrolling

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  const sectionCords = section1.getBoundingClientRect();
  console.log(sectionCords);
  // window.scrollTo(
  //   sectionCords.left + window.scrollX,
  //   sectionCords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: sectionCords.left + window.scrollX,
  //   top: sectionCords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// tabbed component

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  // remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Add active classes
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// nav fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

/*
// sticky navigation (bad codigng: alot of events will fires)
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', () => {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/
// observeing for sticky navigation

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections

// const revealSection = function (entries, observe) {
//   const [entry] = entries;

//   if (!entry.target) return;

//   entry.target.classList.remove('section--hidden');
//   sectionObserver.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(section => {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });

// Lazy louding images
const lazyImages = document.querySelectorAll('img[data-src]');

const loudImg = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  lazyImagesObserver.unobserve(entry.target);
};

const lazyImagesObserver = new IntersectionObserver(loudImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

lazyImages.forEach(img => lazyImagesObserver.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
let currentSlide = 0;
const slideLength = slides.length;

slider.style.transform = 'scale(50%) translateX(-600px)';
slider.style.overflow = 'visible';

slides.forEach((slide, index) => {
  slide.style.transform = `translatex(${100 * index}%)`;
});

btnRight.addEventListener('click', function () {
  if (currentSlide === slideLength - 1) currentSlide = 0;
  else currentSlide++;
  slides.forEach((slide, index) => {
    slide.style.transform = `translatex(${-100 * (currentSlide - index)}%)`;
  });
});
