// doSomething -> function passed as an argument to another function
// ensures that a function is not going to run before a task is completed


function sum(x, y, myCallback){
    let result = x + y;
    myCallback(result);
}

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}

let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

sum(2, 3, displayConsole);