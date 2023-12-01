// functions -> define code once, and use it many times. To perform a code, call the function name
let userName = "Andrei";
let age = 40;

function happyBirthday() {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, " years old!");
}

happyBirthday();

// return keyword -> to return a value back
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);
console.log("The area is:", area);

function getArea(width, height) {
    let result = width * height;
    return result;
}