// array.map() -> executes a provided callback function once for each array element amd creates a new array
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
squares.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function print(element) {
    console.log(element);
}

// loop through the array
let elements = numbers.map(element => console.log("Element", element));