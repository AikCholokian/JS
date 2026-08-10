let temperature = 18;
// Python: and or not
// JavaScript: && || !
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It's cold.");
} else if (temperature >= 20 && temperature < 30) {
    console.log("It's warm.");
} else  {
    console.log("It's hot!");
}

let number = 5;
console.log(number % 2 === 0 ? "Even" : "Odd");

let age = 15;
let isAdult = age;
console.log(isAdult >= 18 ? "You are an adult." : "You are not an adult.");

number = 5;
switch (number) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}

number = 6;
switch (number) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("Invalid day number.");
}

let myName = null;
let result = myName ?? "Unknown";
console.log(result);