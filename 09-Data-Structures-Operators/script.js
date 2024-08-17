'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const newArr = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newArr);

//////////////////////////////////////////////////////////////////////////////////
//first challing

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1-
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2-
const [gk, ...fieldPlayers] = [...players1];

console.log(gk);
console.log(fieldPlayers);

//3-
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4-
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5-
const { team1, x: drew, team2 } = game.odds;
console.log(drew);

//6-

const printGoals = function (...players) {
  console.log(`${players.length} gouls scored in the game.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

/////////////////////////////////////////////////////////////
//challinge #2

//1-

for (const [number, player] of game.scored.entries())
  console.log(`Goal ${number + 1}: ${player}`);

//2-
let sum = 0;

for (const value of Object.values(game.odds)) {
  sum += value;
}

const avareg = sum / Object.values(game.odds).length;

console.log(avareg);

//3-
for (const [key, value] of Object.entries(game.odds)) {
  // console.log(`Odds of ${game[key]} ? "vectory of ${game[key]}" : "drew": ${value} `)
}

/////////////////////////////////////////////////////////////
//challinge #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1-
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2-

gameEvents.delete(64);

// 3-

// 4-
for (const [key, value] of gameEvents) {
  const halfNumber = key < 45 ? 'First' : 'Second';
  console.log(`[${halfNumber} half] ${key}: ${value}`);
}

/////////////////////////////////////////////////////////////
//challinge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const handlingUserInput = userText => {
  const lines = userText.split('\n');
  for (const [i, line] of lines.entries()) {
    const [first, second] = line.toLowerCase().trim().split('_');
    const masseg = `${first} ${second.replace(second[0], second[0].toUpperCase())}`
    console.log(`${masseg.padEnd(20, ' ')}${'✅'.repeat(i+1)}`)
    // console.log(line.toLowerCase().repleace('_', " ").)
  }
};
document.querySelector('button').addEventListener('click', () => {
  const userText = document.querySelector('textarea').value;
  handlingUserInput(userText);
});
