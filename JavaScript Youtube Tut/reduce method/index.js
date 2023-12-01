// array.reduce() -> reduces an array to a single value
let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);
console.log(`The total is: $${total}`);

function checkOut(total, element) {
    return total + element;
}

let numbers = [1, 2, 3, 4, 5, 6];
let totalNums = numbers.reduce((number, total) => number + total);
console.log('Total of nums:', totalNums);