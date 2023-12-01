// toLocaleString() -> returns a string with a language sensitive representation of this

// ex: number.toLocaleString(locale, {options})
        // - locale -> specify the language (undefined = default set in the browser)
        // options -> object with formatting options

let myNum = 123456.789;
// myNum = myNum.toLocaleString("en-US"); // US English 123,456.789
// myNum = myNum.toLocaleString("de-DE"); // standard German 123.456.789

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});

myNum = myNum.toLocaleString(undefined, {style: "percent"}); // 12,345,679%

console.log(myNum); // $123,456.789

