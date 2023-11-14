// promises -> objects that encapsulates the result of an asynchronous operation
// let asynchronous methods return values like synchronous methods ("I promise to return something in the future")

// state is 'pending', 'fulfilled' or 'rejected'
// Result is what can be returned
const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if (fileLoaded) {
        resolve("File loaded");
    } else {
        reject("File NOT loaded");
    }
});

promise.then((value) => console.log(value))
        .catch(error => console.log(error));

const myPromise = new Promise(resolve => {
    setTimeout(resolve, 5000);
});

myPromise.then(() => console.log("Thanks for waiting"));

// ========= async -> makes a function return a Promise
async function loadFile() {
    let fileLoadedAsync = false;

    if (fileLoadedAsync) {
        return "File loaded async";
    } else {
        throw "File NOT loaded from async";
    }
}

loadFile().then((value) => console.log(value))
            .catch(error => console.log(error));

// ========== await -> makes an async function wait for a Promise
async function loadMyFile() {
    let fileLoadedAsyncAwait = false;

    if (fileLoadedAsyncAwait) {
        return "File loaded async-await";
    } else {
        throw "File NOT loaded from async-await";
    }
}

async function startProcess() {
    try {
        let message = await loadMyFile();
        console.log(message);
    } catch(error) {
        console.log(error);
    }
}
startProcess();