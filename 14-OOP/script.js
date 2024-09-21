'use strict';

////////////////////////////////////////////////////////////
// Lesons

/*
// 1. constractor function
const Person = function (firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.age = new Date().getFullYear() - birthYear;
};

const diab = new Person('diab', 'hossny', 1996);

console.log(diab);

console.log(diab instanceof Person);

console.log(`hi my name is ${diab.firstName} ${diab.lastName}`);

console.log(diab.__proto__ === Person.prototype);

console.log(Person.__proto__);

console.log(diab.__proto__);

console.log(Person.prototype.isPrototypeOf(diab));

Person.prototype.gender = 'male';

console.log(diab.hasOwnProperty('gender'), diab.gender);

// 2. classes ==> it's suntax suger but it is still just function (ES6)

class PersonCl {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  calcAge() {
    this.age = 2037 - this.birthYear;
  }
}

const jonas = new PersonCl('jonas', 'instractor', 1991);

jonas.calcAge();
console.log(jonas);

// 2.1. object.creat() method



*/

// inhiritance

const Person = function (firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  // this.age = new Date().getFullYear() - birthYear;
};

Person.prototype.calcAge = function () {
  this.age = 2037 - this.birthYear;
};

/////////////////////////////////////////////////////////
// challinges

// challinge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`the ${this.make} car top speed now is ${this.speed} KM/H`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`the ${this.make} car top speed now is ${this.speed} KM/H`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
console.log(bmw.speed);

// challinge #2
class CarCL {
  constractor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Methods
  accelerate() {
    this.speed += 10;
    console.log(`the ${this.make} car top speed now is ${this.speed} KM/H`);
  }

  brake() {
    this.speed -= 5;
    console.log(`the ${this.make} car top speed now is ${this.speed} KM/H`);
  }

  // Asserios
  get speddUS() {
    return this.speed / 1.6;
  }
  // /**
  //  * @param {number} speed
  //  */
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCL('ford', 120);
