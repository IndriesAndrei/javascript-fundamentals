// break -> breaks out of a loop entirely
// continue -> skip an iteration of a loop
for(let i = 1; i <= 20; i++) {
    // we want to exit the loop if i = 13
    if (i == 13) {
        break;
    }
    console.log(i);
}

// with continue we can skip some specific iteration and continue on
for (let y = 1; y <= 20; y++) {
    // we will skip the 13 number
    if (y == 13) {
        continue;
    }

    console.log(y);
}