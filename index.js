let firstName = 'Andrei';
let age = 21;
let student = true;

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

// let username = window.prompt("What's your name?");
// console.log(username);

let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}


