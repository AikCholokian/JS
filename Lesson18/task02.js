function sayHello() {
  console.log("Hello, World!");
}

sayHello();
sayHello();
sayHello();

console.log("================================");
greet("John");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log("================================");

const result = getSum(5, 3);
console.log(result);
console.log(getSum(10, 20));
console.log(getSum);

function getSum(a, b) {
  return a + b;
}


console.log("================================");
const numbers = [1, 2, 3, 4, 5];
const cities = ["New York", "London", "Paris"];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement(numbers));
console.log(getLastElement(cities));

console.log("================================");
console.log(generateArray(10));

function generateArray(length) {
    const arr = Array.from({ length }, (_, index) => index + 1);
    return arr;
}


console.log("================================");
function greting1(name="Guest") {
    return `Hello, ${name}!`;
}

console.log(greting1());
console.log(greting1("Alice"));

console.log("================================");

const gret1 = function greting2(name="Guest") {
    return `Hello, ${name}!`;
}
console.log(gret1("Bob"), typeof gret1);

const gret2 = function(name="Guest") {
    return `Hello, ${name}!`;
}   

console.log(gret2("Charlie"), typeof gret2);

console.log("================================");

const gret3 = (name="Guest") => {
    return `Hello, ${name}!`;
}
console.log(gret3("David"), typeof gret3);

const gret4 = name => `Hello, ${name}!`;
console.log(gret4("Eve"), typeof gret4);

const gret5 = () => "Hello, Guest!";
console.log(gret5(), typeof gret5);