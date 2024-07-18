<<<<<<< HEAD
"use strict";
///////////////////////////////////////////////////////////////
//challing #1 (Functions)
console.log("Fitst challing \n \n");
const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
let dolpninAverageScore = calcAverage(44, 23, 71);
let koalaAverageScore = calcAverage(65, 54, 49);

function winnerTeam(dolpninAverageScore, koalaAverageScore) {
  if (dolpninAverageScore >= koalaAverageScore * 2) {
    console.log(
      `Dolphins wins ${dolpninAverageScore} vs. ${koalaAverageScore}`
    );
  } else if (koalaAverageScore >= dolpninAverageScore * 2) {
    console.log(`Koalas wins ${koalaAverageScore} vs. ${dolpninAverageScore}`);
  } else {
    console.log(`No team wins...`);
  }
}
winnerTeam(dolpninAverageScore, koalaAverageScore);

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
dolpninAverageScore = calcAverage(85, 54, 41);
koalaAverageScore = calcAverage(23, 34, 27);

winnerTeam(dolpninAverageScore, koalaAverageScore);

console.log("================================================");
console.log("================================================");
///////////////////////////////////////////////////////////////
//challing #2 (Arrays)
console.log("Second challing \n \n");

const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? (billValue * 15) / 100
    : (billValue * 20) / 100;
  // if (billValue >= 50 && billValue <= 300) return (billValue * 15) / 100;
  // else return (billValue * 20) / 100;
};

const bills = [125, 555, 45];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++){
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}






// console.log(`the bills is ${bills[0]}`);
// console.log(`the tips is ${tips[0]}`);
// console.log(`the totals is ${totals[0]}`);
// console.log("------------------------------------------------");

// console.log(`the bills is ${bills[1]}`);
// console.log(`the tips is ${tips[1]}`);
// console.log(`the totals is ${totals[1]}`);
// console.log("------------------------------------------------");
// console.log(`the bills is ${bills[2]}`);
// console.log(`the tips is ${tips[2]}`);
// console.log(`the totals is ${totals[2]}`);

for (let i = 0; i < bills.length; i++) {
  console.log(`the bills is ${bills[i]}`);
  console.log(`the tips is ${tips[i]}`);
  console.log(`the totals is ${totals[i]}`);
  console.log("------------------------------------------------");
  
}


console.log("================================================");
console.log("================================================");
///////////////////////////////////////////////////////////////
//challing #3 (objects)
console.log("Third challing \n \n");

//vidoe challenges
const diab = {
  /// literal creating
  firstName: "eldiaby",
  lastName: "hossny",
  age: 28,
  skills: ["html", "css", "js"],
  displayData: function () {
    console.log(
      `my name is ${this.firstName} ${this.lastName} and my age is ${this.age}-year and my skills is : ${this.skills[0]}, ${this.skills[1]}, ${this.skills[2]}`
    );
  },
};
const nameKey = "Name";
console.log(diab["first" + nameKey]);
console.log(diab["skills"].length);

diab.displayData();

////////////////////////////////////////////////////
//main challinge
const markMiller = {
  firstName: "Mark",
  lastName: "miller",
  weight: 78,
  tall: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / (this.tall * this.tall);
    return this.BMI;
  },
};
const johnSmith = {
  firstName: "john",
  lastName: "smith",
  weight: 92,
  tall: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / (this.tall * this.tall);
    return this.BMI;
  },
};

johnSmith.calcBMI();
markMiller.calcBMI();

if (johnSmith.BMI > markMiller.BMI) {
  console.log(
    `john's BMI (${johnSmith.BMI}) is higher than mark's (${markMiller.BMI})`
  );
} else if (johnSmith.BMI < markMiller.BMI) {
  console.log(
    `${markMiller.firstName} ${markMiller.lastName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.firstName} ${johnSmith.lastName}'s (${johnSmith.BMI})`
  );
}

console.log("================================================");
console.log("================================================");
///////////////////////////////////////////////////////////////
//challing #4 (itterations)
console.log("fourth challing \n \n");


const secondCalcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? (billValue * 15) / 100
    : (billValue * 20) / 100;
  // if (billValue >= 50 && billValue <= 300) return (billValue * 15) / 100;
  // else return (billValue * 20) / 100;
};


const secondBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const secondTips = [];
const secondTotal = [];

for (let i = 0; i <= 9; i++) {
  secondTips[i] = secondCalcTip(secondBills[i]);
  secondTotal[i] = secondBills[i] + secondTips[i];
}

const avaArr = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum / arr.length;
}

=======
"use strict";
///////////////////////////////////////////////////////////////
//challing #1 (Functions)
console.log("Fitst challing \n \n");
const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
let dolpninAverageScore = calcAverage(44, 23, 71);
let koalaAverageScore = calcAverage(65, 54, 49);

function winnerTeam(dolpninAverageScore, koalaAverageScore) {
  if (dolpninAverageScore >= koalaAverageScore * 2) {
    console.log(
      `Dolphins wins ${dolpninAverageScore} vs. ${koalaAverageScore}`
    );
  } else if (koalaAverageScore >= dolpninAverageScore * 2) {
    console.log(`Koalas wins ${koalaAverageScore} vs. ${dolpninAverageScore}`);
  } else {
    console.log(`No team wins...`);
  }
}
winnerTeam(dolpninAverageScore, koalaAverageScore);

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
dolpninAverageScore = calcAverage(85, 54, 41);
koalaAverageScore = calcAverage(23, 34, 27);

winnerTeam(dolpninAverageScore, koalaAverageScore);

console.log("================================================");
console.log("================================================");
///////////////////////////////////////////////////////////////
//challing #2 (Arrays)
console.log("Second challing \n \n");

const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? (billValue * 15) / 100
    : (billValue * 20) / 100;
  // if (billValue >= 50 && billValue <= 300) return (billValue * 15) / 100;
  // else return (billValue * 20) / 100;
};

const bills = [125, 555, 45];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++){
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}






// console.log(`the bills is ${bills[0]}`);
// console.log(`the tips is ${tips[0]}`);
// console.log(`the totals is ${totals[0]}`);
// console.log("------------------------------------------------");

// console.log(`the bills is ${bills[1]}`);
// console.log(`the tips is ${tips[1]}`);
// console.log(`the totals is ${totals[1]}`);
// console.log("------------------------------------------------");
// console.log(`the bills is ${bills[2]}`);
// console.log(`the tips is ${tips[2]}`);
// console.log(`the totals is ${totals[2]}`);

for (let i = 0; i < bills.length; i++) {
  console.log(`the bills is ${bills[i]}`);
  console.log(`the tips is ${tips[i]}`);
  console.log(`the totals is ${totals[i]}`);
  console.log("------------------------------------------------");
  
}


console.log("================================================");
console.log("================================================");
///////////////////////////////////////////////////////////////
//challing #3 (objects)
console.log("Third challing \n \n");

//vidoe challenges
const diab = {
  /// literal creating
  firstName: "eldiaby",
  lastName: "hossny",
  age: 28,
  skills: ["html", "css", "js"],
  displayData: function () {
    console.log(
      `my name is ${this.firstName} ${this.lastName} and my age is ${this.age}-year and my skills is : ${this.skills[0]}, ${this.skills[1]}, ${this.skills[2]}`
    );
  },
};
const nameKey = "Name";
console.log(diab["first" + nameKey]);
console.log(diab["skills"].length);

diab.displayData();

////////////////////////////////////////////////////
//main challinge
const markMiller = {
  firstName: "Mark",
  lastName: "miller",
  weight: 78,
  tall: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / (this.tall * this.tall);
    return this.BMI;
  },
};
const johnSmith = {
  firstName: "john",
  lastName: "smith",
  weight: 92,
  tall: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / (this.tall * this.tall);
    return this.BMI;
  },
};

johnSmith.calcBMI();
markMiller.calcBMI();

if (johnSmith.BMI > markMiller.BMI) {
  console.log(
    `john's BMI (${johnSmith.BMI}) is higher than mark's (${markMiller.BMI})`
  );
} else if (johnSmith.BMI < markMiller.BMI) {
  console.log(
    `${markMiller.firstName} ${markMiller.lastName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.firstName} ${johnSmith.lastName}'s (${johnSmith.BMI})`
  );
}

console.log("================================================");
console.log("================================================");
///////////////////////////////////////////////////////////////
//challing #4 (itterations)
console.log("fourth challing \n \n");


const secondCalcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? (billValue * 15) / 100
    : (billValue * 20) / 100;
  // if (billValue >= 50 && billValue <= 300) return (billValue * 15) / 100;
  // else return (billValue * 20) / 100;
};


const secondBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const secondTips = [];
const secondTotal = [];

for (let i = 0; i <= 9; i++) {
  secondTips[i] = secondCalcTip(secondBills[i]);
  secondTotal[i] = secondBills[i] + secondTips[i];
}

const avaArr = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum / arr.length;
}

>>>>>>> 6e7e3ca154fb932db454fa953c244d9d5a3a0c54
console.log(avaArr(secondTotal))