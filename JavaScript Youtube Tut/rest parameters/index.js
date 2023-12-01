// rest parameters => represents and indefinite number od parameters (pack arguments into an array)
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let f = 5;

console.log(sum(a, b, c, d));

// with spread operator we can add any number of arguments to our functions
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}