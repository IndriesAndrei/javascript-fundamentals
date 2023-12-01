// while loop  -> repeat some code while some condition is true
let userName = "";

while (userName == "" || userName == null) {
    userName = window.prompt("Enter your name!");
}

console.log("Hello", userName);

// do while -> do something, then check the condition, repeat if condition is true
let userName2;

do {
    userName2 = window.prompt("Enter your name user 2!");
} while(userName == "");


