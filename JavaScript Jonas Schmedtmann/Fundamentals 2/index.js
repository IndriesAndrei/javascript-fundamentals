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
