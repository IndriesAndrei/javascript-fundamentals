'use strict';

// PROBLEM to solve
// We work for a company building a smart home thermometer. Our task: "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error"
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temperature amplitude ? Answer: difference between the highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?


// 2. Breaking up into sub-problems
// 2.1 How to ignore errors?
// 2.2. Find max value in temperature array
// 2.3 Find the min value in an array
// 2.4 Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log('Max is: ', max, 'Min is: ', min);
    return max - min;
};
calcTempAmplitude([3, 7, 4, 'error', 1, 23]); 
// max = 3
// max = 7
const amplitude = calcTempAmplitude(temperatures);
console.log('Amplitude', amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// 1. Understanding the problem
// - With 2 arrays, should be implemented the functionality twice? NO, we can just merge the 2 arrays

// 2. Breaking up into sub-problems
// - How to merge 2 arrays?
const calcTempAmplitudeNew = function (temps1, temps2) {
    // merge the 2 arrays
    const temps = temps1.concat(temps2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log('Max is: ', max, 'Min is: ', min);
    return max - min;
};
calcTempAmplitudeNew([3, 7, 4, 'error', 1, 23], [1, 9, 0, 6]); 
// max = 3
// max = 7
// const amplitudeNew = calcTempAmplitudeNew(temperatures);
// console.log('Amplitude', amplitudeNew);