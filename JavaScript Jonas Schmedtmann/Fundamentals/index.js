let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun!');

// =====================================
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

// =====================================
// ======== let, var, const =========
let myAge = 40;
age = 41; // reassigning the value of the variable

// const value cannot be changed
const birthYear = 1983;
// birthYear = 1990; -> will not work

// =====================================
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

// =====================================
// ===== operator precedence (math operators ar executed before the comparison operators)=====
const now = 2037;
console.log(now - 1991 > now - 2018);

let y, z;
y = z = 25 - 10 - 5; // y = z = 10 (first it makes the - and after the assignment (right to left))
console.log(y, z); // y = 10; z = 10

const averageAge = (ageJonas + ageSarah) / 2; // (..) grouping has the highest precedence
console.log(ageJonas, ageSarah, averageAge);

// =====================================
// ======== template literals =======
const fullName = "Andrei Ind";
const job = "programmer";
const yearOfBirth = 1983;
const year = 2037;

const andrei = "I'm" + fullName + ', a ' + (year - yearOfBirth) + 'years old' + job + '!';
console.log(andrei);

const andreiNew = `I'm ${fullName}, a ${year - yearOfBirth} years old ${job}!`;
console.log(andreiNew);
console.log(`String
multiple
lines`);

// =====================================
// ======== if/else statements ========
const personAge = 15;
const isOldEnough = personAge >= 18;

if (isOldEnough) {
    console.log("You can start driving school!");
} else {
    const yearsLeft = 18 - personAge; 
    console.log(`You cannot start driving school yet! Wait another ${yearsLeft} years!`);
}

const birth = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// =====================================
// =========== type conversion and coercion ==========
// type conversion -> manually convert a type to another;
const inputYear = '1991';
// converting string to number
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// converting number to string
console.log(String(23));

// type coercion -> JavaScript automatically converts type
console.log('I am ' + 23 + ' years old'); // + converts numbers to string
console.log('23' - '10' - 3) // 10 (JS converts strings to numbers in this case -)

// =====================================
// ========= truthy and falsy values ============
// in JS are 5 falsy values -> 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

// check if a variable exists
let height = 10;
if (height) {
    console.log("Yay! Height is DEFINED!");
} else {
    console.log("Height is UNDEFINED");
}

// =====================================
// Equality operators == vs ===
const ageToCheck = 18;
// === -> only if the 2 values are strictly equal (does not make type coercion)
if (ageToCheck == 18) console.log('You just became an adult! (loose)');
if (ageToCheck === 18) console.log('You just became an adult! (strict)');

'18' == 18; // true == do make type coercion
'18' === 18; // false === does not make type coercion

const favorite = Number(prompt("Input a number!"));
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool.');
} else if (favorite === 7) {
    console.log("Cool, 7 is great!");
} else {
    console.log("Number is not 23 nor 7!");
}

// =====================================
// Boolean logic: &&, ||, !  (AND, OR, NOT) operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false (both of these conditions need to be true)
console.log(hasDriversLicense || hasGoodVision); // true (it'sone condition should be true)
console.log(!hasDriversLicense); // false

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

// =====================================
// Switch statement
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday' (strict)
        console.log('Plan course structure.');
        console.log('Go to coding meetup!');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend!");
        break;
    default:
        console.log("Not a valid day!");
}


// =====================================
// the conditional ternary operator


// =====================================


// =====================================


// =====================================
