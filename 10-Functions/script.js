'use strict';

// const Bookings = [];

// const creatBooking = (flightNumber = 101, price = 199, passengerNumber = 1) => {
//   const booking = {
//     flightNumber,
//     price,
//     passengerNumber,
//   };
//   Bookings.push(booking);
// };

// creatBooking();
// creatBooking(1);
// creatBooking(1, 2);
// creatBooking(1, 2, 3);
// creatBooking(1, undefined, 3);
// console.log(Bookings);

const flight = 'LH234';
const diab = {
  name: 'diab hossny ibrahim',
  passport: 852258852258,
};

const chickIn = function (flightNum, passenger) {};

chickIn(flight, diab);

// high order fanction or call back fanction

const toUpper = function (str) {
  return str.toUpperCase();
};

const toLower = function (str) {
  return str.toLowerCase();
};

const trans = (str, fn) => {
  console.log(`the origin string is ${str}`);
  console.log(`the fanction name is ${fn.name}`);
  console.log(`the trans string is ${fn(str)}`);
};

const name = 'elDiAby';

trans(name, toUpper);
trans(name, toLower);

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hi')('ahmed');

const taxs = (precent, value) => value + value * precent;

const taxsTwinty = value => taxs(0.5, value);

console.log(taxsTwinty(10));
console.log(taxsTwinty(100));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

const isValid = userInput => (typeof userInput === 'number' && userInput <= 3 && userInput >= 0) ? true : false;

const displayResults = function (type = 'string') {
  if (type === 'string') console.log(`Poll results are ${this.answers.join(',')}`)
  else if (type === 'array')  console.log(this.answers)
}

const registerNewAnswer = function () {
  // const { question, options } = poll;
  let userInput;
  do {
    userInput = Number(window.prompt(`${this.question}
${this.options.join(`\n`)}
(Write option number | if there is no choice it will be 0)`));
  } while(!isValid(userInput))
  this.answers[userInput]++;
  console.log(this.answers);
  displayResults.call(poll, userInput)
};

document.querySelector('.poll').addEventListener('click', registerNewAnswer.bind(poll));


const Data1 = [5, 2, 3]
const Data2 = [1, 5, 3, 9, 6, 1]

displayResults.call({answers : Data1})