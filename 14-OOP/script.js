'use strict';

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
