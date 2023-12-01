// useful string properties and methods
let username ="Andrei Indries";
let phoneNumber = "123-456-789";

console.log(username.length);

// character at specified index
console.log("First character is: ", username.charAt(0));

// find first index of a letter
console.log("first occurence of n at position: ", username.indexOf("n"));

// last index of some letter
console.log("Last index of a letter n is: ", username.lastIndexOf("n"));

// uppercase/lowercase all characters
console.log(username.toUpperCase());
console.log(username.toLowerCase());

// replace all with something else (what to replace, with what to replace)
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// slice() -> extracts a section of a string and returns it as a new string,
// without modifying the original string
let fullName = "Andrei Indries";
let firstName;
let lastName;

// firstName = fullName.slice(0, 6);
// lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log("First Name: ", firstName);
console.log(lastName);
