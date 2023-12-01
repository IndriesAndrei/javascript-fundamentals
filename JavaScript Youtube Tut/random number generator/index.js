// we want a number between 1 and 6 (dice simulation)
let x;

document.getElementById("rollButton").onclick = function() {
    x = Math.floor(Math.random() * 6) + 1
    document.getElementById("xLabel").innerHTML = x;
}

console.log(x);