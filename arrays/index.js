// arrays - variables that store multiple values
let myFruits = ["apple", "orange", "banana"];

// we can change any element by accessing it
myFruits[2] = "coconut";

// add an element to the array
myFruits.push("lemon"); 
myFruits.pop(); // removes last element
myFruits.unshift("mango"); // add element to beginning of an array
myFruits.shift(); // removes first element

// length of an array
let length = myFruits.length;

// index of element
let index = myFruits.indexOf("apple");
console.log('Index', index);

console.log('myFruits', myFruits);

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

// sort an array of strings
let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort();

// reverse order
fruits = fruits.sort().reverse();

for (let fruit of fruits) {
    console.log("Arranged order", fruit);
}

// ========== 2D arrays ========== 
let otherFruits = ["apples", "oranges", "bananas"];
let vegetables =  ["carrots", "onions", "potatoes"];
let meats =       ["eggs", "chicken", "fish"];

// 2D array
let groceryList = [fruits, vegetables, meats];

// accessing some individual element from the 2D array
groceryList[0][0] = "mangoes"; // change 'apples'

for (let list of groceryList) {
    // to access individual element sof arrays
    for (let food of list) {
        console.log(food);
    }    
}

// ========= spread operator =======
/* allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)
*/
const userName = "Bro Code";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
console.log(...userName); 
console.log(...numbers); // will unpack to individual arguments: 0 1 2 3 4 5 6 7 8 9

// get maximum value from the array using spread operator
let maximum = Math.max(...numbers);
console.log(maximum);

// concatenate 2 arrays
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);
console.log(class1);

// =========== shuffle arrays
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);
console.log(cards);
console.log(cards[0]);

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex= Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}
