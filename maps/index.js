// map -> object that holds key-value pairs of any data type
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10]
]);

// get element from Map
store.get("t-shirt");

// add new element to a Map
store.set("hat", 40);

store.forEach((value, key) => console.log(`${key} $${value}`));