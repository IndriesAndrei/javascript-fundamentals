let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun!');

// ======== variables ========
let firstName = 'Andrei';
console.log("First Name is", firstName);

// ======== data types > primitive types (which are not object type) (number, string, boolean, undefined, null, symbol, bigInt ) =======
let age = 23; // number
let name = 'Andrei'; // string
let fullAge = true; // boolean
let children; // undefined (value taken by a variable that is not yet defined -> empty value)
// null empty value;
// symbol -> value that is unique and cannot be change
// BigInt => larger integers than the Number type can hold

// ======== let, var, const =========
let myAge = 40;
age = 41; // reassigning the value of the variable

// const value cannot be changed
const birthYear = 1983;
// birthYear = 1990; -> will not work

// ====== basic operators (mathematical operators, comparison operators, logical operators, assignment operators )==========
// 1. mathematical operators
const ageJonas = 2023 - 1991;
const ageSarah = 35;
console.log(ageJonas);
console.log(ageJonas * 2, ageJonas / 10);

// 2. Assignment operators
let x = 10 + 5; // x = 15
x += 5; // x = 15 + 5 = 20
x *= 4; // x= 20 * 4 = 80
x++; // x = x + 1
x--; // x= x -1

// 3. Comparison operators (>, <, >=, <=)
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

// ===== operator precedence (math operators ar executed before the comparison operators)=====
const now = 2037;
console.log(now - 1991 > now - 2018);

let y, z;
y = z = 25 - 10 - 5; // y = z = 10 (first it makes the - and after the assignment (right to left))
console.log(y, z); // y = 10; z = 10

const averageAge = (ageJonas + ageSarah) / 2; // (..) grouping has the highest precedence
console.log(ageJonas, ageSarah, averageAge);
