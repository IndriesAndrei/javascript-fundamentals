// arrays - variables that store multiple values
let fruits = ["apple", "orange", "banana"];

// we can change any element by accessing it
fruits[2] = "coconut";

// add an element to the array
fruits.push("lemon"); 
fruits.pop(); // removes last element
fruits.unshift("mango"); // add element to beginning of an array
fruits.shift(); // removes first element

// length of an array
let length = fruits.length;

// index of element
let index = fruits.indexOf("apple");
console.log('Index', index);

console.log('Fruits', fruits);

// loop through array elements
let prices = [5, 10, 15, 20];

for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}

// or we can loop like this
for (let price of prices) {
    console.log("Price with of", price);
}

// backwards iterate an array
for (let j = prices.length - 1; j >= 0; j--) {
   console.log('Backwards iterate', prices[j]);
    
}