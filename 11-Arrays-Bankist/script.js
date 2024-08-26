'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// the main project
const displayMovement = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((value, index) => {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${value}€</div>
          </div> `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((accu, value) => accu + value, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = movements => {
  const income = movements
    .filter(movement => movement > 0)
    .reduce((accu, movement) => accu + movement, 0);
  labelSumIn.textContent = `${income} €`;

  const outcome = movements
    .filter(movement => movement < 0)
    .reduce((accu, movement) => accu + movement, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = movements
    .filter(movement => movement > 0)
    .map(movement => (movement * 1.2) / 100)
    .filter(inter => inter >= 1)
    .reduce((accu, inter) => accu + inter, 0);

  labelSumInterest.textContent = `${interest}`;
};

calcDisplaySummary(account1.movements);

const createUsername = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log('the value of ' + key, 'is: ', value);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, value] of movements.entries()) {
  if (value < 0) console.log('your operation is withdrow');
  else console.log('your operation is deposite ');
}

console.log('---------For each -----------');

movements.forEach((movement, index, array) => {
  if (movement < 0) console.log('your operation is withdrow');
  else console.log('your operation is deposite ');
});

const withdrows = movements.filter(movement => movement < 0);
console.log(withdrows);

const balance = movements.reduce((accu, value) => accu + value, 0);

console.log(balance);

/////////////////////////////////////////////////

// challinge #1
const JuliaData = [3, 5, 2, 12, 7],
  KateData = [4, 1, 15, 8, 3];

const checkDogs = (JuliaDogs, KateDogs) => {
  const juliaRightData = JuliaDogs.slice(1, -2);
  const theFinalArrayData = juliaRightData.concat(KateDogs);
  console.log(theFinalArrayData);
  theFinalArrayData.forEach((value, index) => {
    value > 3
      ? console.log(
          'Dog number ' + index + 1 + ' is an adult, and is ',
          value,
          'years old �'
        )
      : console.log(
          'Dog number ' + index + 1 + ' is still puppy, and is ',
          value,
          'years old �'
        );
    // or a puppy("Dog number 2 is still a puppy
    //   )
  });
};

checkDogs(JuliaData, KateData);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//////////////////////////////////////////
//challenge #2

const calcAverageHumanAge = dogsAges => {
  const dogsInHumanYears = dogsAges.map(age =>
    age <= 2 ? age * 2 : 16 + age * 4
  );
  const filteredDogsAges = dogsInHumanYears.filter(age => age >= 18);
  const avaAduAge =
    filteredDogsAges.reduce((accu, age) => accu + age, 0) /
    filteredDogsAges.length;
  console.log(avaAduAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

///////////////////////////////////////////////
// .challenge #3

const avaAduAge = [5, 2, 4, 1, 15, 8, 3]
  .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((accu, age, index, arr) => accu + age / arr.length, 0);
console.log(`${avaAduAge}`);
