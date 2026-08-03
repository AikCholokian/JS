let number1 = 5;
let number2 = 5;
let result = number1 === number2;
console.log(result); // true

let result2 = number1 == number2;
console.log(result2); // true

let number3 = 5;
let number4 = "5";
let result3 = number3 === number4;
console.log(result3); // false

let result4 = number3 == number4;
console.log(result4); // true

console.log("5" !== 5); // true
console.log("5" != 5); // false