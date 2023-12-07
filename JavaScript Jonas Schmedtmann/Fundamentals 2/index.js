// JS Fundamentals 2
// ======== activate strict mode ==========
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// ========= Functions ==========
function logger() {
    console.log("My name is Andrei");
}

// calling a function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(3, 2));
const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice);

// function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1983);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// ==== arrow functions ====
const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(2015, 'Andrei'));


// example code
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('No team wins');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// =============================================
//========== Arrays =========
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1994, 2008, 2020);

// extract data from arrays
console.log(friends[0]);

// get actual number of elements from the array
console.log(friends.length); // friends.length is not 0 based, so if we want to get the last element we need to make friends[friends.length - 1]

// change the array
friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcTheAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsArr = [1990, 1967, 2002, 2010, 2018];
const ageOne = calcAge1(yearsArr[0]);
console.log(ageOne);

// Array methods
// push -> adds elements to end of an array
friends.push("Peter"); 
console.log('pushed element to end of array', friends);

// unshift -> adds element ot the beginning of an array
friends.unshift('John');
console.log(friends);

// pop -> removes the last element from an array
friends.pop();
console.log(friends);

// shift -> removes the first element from an array
friends.shift();
console.log(friends);

// find index of an element
console.log(friends.indexOf('Steven')); // 1

// see if the array includes some value
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false

// Example
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips);
console.log(totals);


// =======================================================
// ======= Objects (key-value pairs) =======
const jonasFriends = {
  firstName: 'John',
  lastName: 'Snow',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Sara', 'Fernando'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }
  calcAge: function () {
    // console.log('This contains', this);
    // return 2037 - this.birthYear;
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonasFriends.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  }
};
console.log(jonasFriends.age);
console.log('Summary:', jonasFriends.getSummary());

// retrieve data from Objects: with Dot (.) and Bracket ([]) notation
console.log(jonasFriends.lastName);
console.log(jonasFriends['lastName']);

// add new properties
jonasFriends.location = 'Portugal';
jonasFriends['twitter'] = '@jonasschmedtman';
console.log(jonasFriends);

console.log(`${jonasFriends.firstName} has ${jonasFriends.friends.length} friends, and his best friend is called ${jonasFriends.friends[0]}`);

// Object methods
console.log(jonasFriends.calcAge(1991));

// example
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: 'John Doe',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

mark.calcBMI();
john.calcBMI();
console.log('Mark BMI:', mark.bmi, 'John BMI:', john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

// ================ For loop ====================
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights ${rep}`);
}

// loop through arrays
const myArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}