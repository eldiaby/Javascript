'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-08-28T23:36:17.929Z',
    '2024-08-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

// movments dadings
const formatMovementDate = function (date, locale) {
  const calcDayspast = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const dayPast = calcDayspast(new Date(), date);
  if (dayPast === 0) return 'Today';
  if (dayPast === 1) return 'Yesterday';
  if (dayPast <= 7) return `${dayPast} days ago`;
  else {
    // const year = date.getFullYear();
    // const month = `${date.getMonth() + 1}`.padStart(2, '0');
    // const day = `${date.getDate()}`.padStart(2, '0');
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurrency = (locale, format = 'USD', currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: format,
  }).format(currency);
};

// Dispaly functions
const displayMovement = (account, sort = false) => {
  containerMovements.innerHTML = '';
  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach((value, index) => {
    const date = new Date(account.movementsDates[index]);
    const displayDate = formatMovementDate(date, account.locale);

    const type = value > 0 ? 'deposit' : 'withdrawal';
    const formatedMovment = formatCurrency(
      account.locale,
      account.currency,
      value
    );
    const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    }. ${type}</div>
            <div class="movements__date">${displayDate}</div>
            <div class="movements__value">${formatedMovment}</div>
          </div> `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((accu, value) => accu + value, 0);
  // labelBalance.textContent = `${account.balance.toFixed(2)}€`;
  labelBalance.textContent = `${formatCurrency(
    account.locale,
    account.currency,
    account.balance
  )}`;
};

const calcDisplaySummary = account => {
  const income = account.movements
    .filter(movement => movement > 0)
    .reduce((accu, movement) => accu + movement, 0);
  labelSumIn.textContent = `${formatCurrency(
    account.locale,
    account.currency,
    income
  )}`;

  const outcome = account.movements
    .filter(movement => movement < 0)
    .reduce((accu, movement) => accu + movement, 0);
  labelSumOut.textContent = `${formatCurrency(
    account.locale,
    account.currency,
    Math.abs(outcome)
  )}`;

  const interest = account.movements
    .filter(movement => movement > 0)
    .map(movement => (movement * account.interestRate) / 100)
    .filter(inter => inter >= 1)
    .reduce((accu, inter) => accu + inter, 0);

  labelSumInterest.textContent = `${formatCurrency(
    account.locale,
    account.currency,
    interest
  )}`;
};

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

// Updaging the ui
const UpdatingUI = account => {
  //Display the movement
  displayMovement(account);

  // Display the summery
  calcDisplaySummary(account);

  // Dispay the balance
  calcDisplayBalance(account);
};

// Global variables
let currentUser;
let sorted = false; // for the sort or unsort the amounts in the UI
let logoutTimerInterval; // the interval timer function for loging out

const logOutTiming = () => {
  const tick = () => {
    // Show the timer in the ui
    const minutes = String(Math.trunc(logOutTimer / 60)).padStart(2, 0);
    const seconds = String(logOutTimer % 60).padStart(2, 0);
    labelTimer.textContent = `${minutes}: ${seconds}`;

    // When the timer finish stop the timer and log out the user
    if (logOutTimer === 0) {
      clearInterval(logoutTimerInterval);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    // Decres the timer
    logOutTimer--;
  };
  // set the timer to 5 minutes
  let logOutTimer = 30;

  tick();
  const logoutTimerInterval = setInterval(tick, 1000);
  return logoutTimerInterval;
};
//======================================//
// Event hamdling

// // Fake logging in for testing
// currentUser = account1;
// UpdatingUI(currentUser);
// containerApp.style.opacity = 100;

// Loging in
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentUser = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentUser?.pin === Number(inputLoginPin.value)) {
    console.log('logedin');
    //Display welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Create current time and date

    const now = new Date();
    const options = {
      minute: 'numeric',
      hour: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    const locale = currentUser.locale;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const day = `${now.getDate()}`.padStart(2, '0');
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const minutes = `${now.getMinutes()}`.padStart(2, '0');
    // `${day}/${month}/${year}, ${hour}:${minutes}`;

    // Empty the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Updating the UI
    UpdatingUI(currentUser);

    // the timer
    if (logoutTimerInterval) clearInterval(logoutTimerInterval);
    logoutTimerInterval = logOutTiming();
  }
});

// transfer to
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(
    account => account.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    currentUser.balance >= amount &&
    recieverAccount &&
    recieverAccount?.username !== currentUser.username
  ) {
    // make the transfers
    currentUser.movements.push(-amount);
    recieverAccount.movements.push(amount);

    // adding transfer time
    currentUser.movementsDates.push(new Date().toISOString());
    recieverAccount.movementsDates.push(new Date().toISOString());
    // Updating the UI
    UpdatingUI(currentUser);
    // updating the timer
    clearInterval(logoutTimerInterval);
    logoutTimerInterval = logOutTiming();
  }
});

//loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentUser.movements.some(movement => movement >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add the amount to the account
      currentUser.movements.push(amount);

      // adding transfer time
      currentUser.movementsDates.push(new Date().toISOString());

      // Updating the UI
      UpdatingUI(currentUser);
      // clear the inputh field
      inputLoanAmount.value = '';
      // updating the timer
      clearInterval(logoutTimerInterval);
      logoutTimerInterval = logOutTiming();
    }, 2000);
  }
});

// close the account
btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentUser.username &&
    Number(inputClosePin.value) === currentUser.pin
  ) {
    console.log('deleted');
    const index = accounts.findIndex(
      account => account.username === currentUser.username
    );
    // Delete the account
    accounts.splice(index, 1);
    // Hide the UI
    containerApp.style.opacity = 0;
    // Empty  the input fields
    inputClosePin.value = inputCloseUsername.value = '';
  }
});

// sorting function
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovement(currentUser, !sorted);
  sorted = !sorted;
});

/*
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


//=======================//
// challinge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1-
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2-
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `sarah's dog is eat too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }`
);

// 3-
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

//4
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

//5
console.log(
  `${ownersEatTooMuch.join(
    ' and '
  )} dogs eat too much and ${ownersEatTooLittle.join(
    ' and '
  )} dogs eat too little`
);

// 6
console.log(`${dogs.some(dog => dog.curFood === dog.recommendedFood)}`);
console.log(
  `${dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )}`
);

// 7
const okAmoundFood = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okAmoundFood);

// 8-
const dogsShallowSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsShallowSorted);



// setInterval
setInterval(() => {
  const now = new Date();
  console.log(`${now.getHours()}: ${now.getMinutes()} ${now.getSeconds()}`);
}, 1000);
*/
