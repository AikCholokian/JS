function outer() {
    const message = "Hello World!";

    function inner() {
        console.log(message);
    }
    inner();
}
outer();

function outer2() {
    const message3 = "Hello World2!";
    function inner2() {
        console.log(message3);
    }
    return inner2;
}

const savedFunction = outer2();
savedFunction();

function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());
console.log(counterB());

console.log(counterA());

function createCounter2() {
    let counter2 = 0;
    return function () {
        counter2++;
        return counter2;
    }
}

const counter2 = createCounter2();
// console.log(counter2());
// console.log(counter2());

const button = document.querySelector("#counterButton");
const result = document.querySelector("#counterResult");

button.addEventListener("click", function () {
    const value = counter2();
    result.textContent = value.toString();
    console.log("counter:", value);
});