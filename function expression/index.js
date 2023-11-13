// function expression -> function without a name (anonymous function)
const greeting = function () {
    console.log("Hello");
}

greeting();

let count =0;
// function expressions
document.getElementById("decreaseButton").onclick = function() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("increaseButton").onclick = function() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}