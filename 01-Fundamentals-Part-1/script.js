<<<<<<< HEAD
// let js = "amazing";
// if (js === "amazing") window.alert("js is amazing");
// console.log(50 + (80 * 2) / 100);
// let firstName = "Eldiaby";
// console.log(firstName);

//=======================================================================================================//
/* first challing  */
// const johnHeight = 1.95;
// const johnMass = 92;
// const markHeight = 1.69;
// const markMass = 78;
///////////////////
//challnge #1
const johnHeight = 1.76; 
const johnMass = 85;
const markHeight = 1.88; 
const markMass = 95;

const markBMI = markMass / markHeight ** 2;
const johnkBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnkBMI)

console.log(markBMI < johnkBMI)
//===========================================================================================================//
//challinge #2
if (johnkBMI > markBMI) {
  console.log(`john BMI (${johnkBMI}) is bigger than mark's (${markBMI}) `)
} else {
  console.log(`mark BMI (${markBMI}) is bigger than john's (${johnkBMI}) `)
}
//===========================================================================================================//
//challinge #3
const dolphinScore = (97 + 112 + 101)/3;
const koalasScore = (109 + 95 + 106) / 3;

console.log(dolphinScore, koalasScore)

if (dolphinScore === koalasScore && dolphinScore >= 100 && koalasScore >=100) {
  console.log('they were draw');
} else if (dolphinScore > koalasScore && dolphinScore >=  100) {
  console.log('dolphins is the winners')
} else if (dolphinScore < koalasScore && koalasScore >= 100) {
  console.log("koala is the winners");
} else {
  console.log('no team wins')
}

///ternary operator

let winnerTeam = (dolphinScore > koalasScore) ? 'dolphin' : 'koalas';
console.log(winnerTeam)


////////////////////////////////////////////////////////////////////////////////////////
//challinge #4
const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? (15 * bill) / 100 : (20 * bill) / 100;

console.log(`the bill is ${bill},
and the tip is ${tip},
and the total value is ${bill + tip}`)







=======
// let js = "amazing";
// if (js === "amazing") window.alert("js is amazing");
// console.log(50 + (80 * 2) / 100);
// let firstName = "Eldiaby";
// console.log(firstName);

//=======================================================================================================//
/* first challing  */
// const johnHeight = 1.95;
// const johnMass = 92;
// const markHeight = 1.69;
// const markMass = 78;
///////////////////
//challnge #1
const johnHeight = 1.76; 
const johnMass = 85;
const markHeight = 1.88; 
const markMass = 95;

const markBMI = markMass / markHeight ** 2;
const johnkBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnkBMI)

console.log(markBMI < johnkBMI)
//===========================================================================================================//
//challinge #2
if (johnkBMI > markBMI) {
  console.log(`john BMI (${johnkBMI}) is bigger than mark's (${markBMI}) `)
} else {
  console.log(`mark BMI (${markBMI}) is bigger than john's (${johnkBMI}) `)
}
//===========================================================================================================//
//challinge #3
const dolphinScore = (97 + 112 + 101)/3;
const koalasScore = (109 + 95 + 106) / 3;

console.log(dolphinScore, koalasScore)

if (dolphinScore === koalasScore && dolphinScore >= 100 && koalasScore >=100) {
  console.log('they were draw');
} else if (dolphinScore > koalasScore && dolphinScore >=  100) {
  console.log('dolphins is the winners')
} else if (dolphinScore < koalasScore && koalasScore >= 100) {
  console.log("koala is the winners");
} else {
  console.log('no team wins')
}

///ternary operator

let winnerTeam = (dolphinScore > koalasScore) ? 'dolphin' : 'koalas';
console.log(winnerTeam)


////////////////////////////////////////////////////////////////////////////////////////
//challinge #4
const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? (15 * bill) / 100 : (20 * bill) / 100;

console.log(`the bill is ${bill},
and the tip is ${tip},
and the total value is ${bill + tip}`)







>>>>>>> 6e7e3ca154fb932db454fa953c244d9d5a3a0c54
