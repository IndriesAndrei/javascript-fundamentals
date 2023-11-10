// switch statement
let grade = "FD";

switch (grade) {
    // case grade >= 90:
    case "A":
        console.log("You did great!");
        break;
    // case grade >= 80:
    case "B":
        console.log("You did good!");
        break;
    // case grade >= 70:
    case "C":
        console.log("You did ok!");
        break;
    // case grade >= 60:
    case "D":
        console.log("You passed... barely!");
        break;
    // case grade < 50
    case "F":
        console.log("You failed!");
        break;
    default:
        console.log(grade, "Is not a letter grade!");
        break;
}

