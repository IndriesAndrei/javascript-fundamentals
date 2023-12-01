// const -> a variable that can't be changed
const PI = 31.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle!");
radius = Number(radius);

// PI = 420; we cannot change const

circumference = 2 * PI * radius;

console.log("The circumference is: ", circumference);
