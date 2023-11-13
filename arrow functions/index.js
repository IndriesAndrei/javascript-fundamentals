// arrow function -> compact alternative to a traditional function

// traditional function expression
const greeting = function(userName) {
    console.log(`hello ${userName}`);
}

// arrow function expression
// without arguments: 
const arrowGreetingWithoutParam = () => console.log(`Hello  from arrow function`);

// with argument
const arrowGreeting = (userName) => console.log(`Hello ${userName} from arrow function`)

greeting("Bro Code");
arrowGreetingWithoutParam();
arrowGreeting("Test");

// another example
const percent = (x, y) =>  x / y * 100;

console.log(`${percent(37, 50)}%`);