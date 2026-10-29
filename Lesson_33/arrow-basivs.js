function greet(name) {
    return `Hello ${name}!`
}

console.log(greet('John'));


const greet1 = (name) => {
    return `Hello ${name}!`
}

console.log(greet1('John'));

function sayHello() {
    log(greet1('Hello'));
}

const seyHello1 = () => {
    console.log("Hello");
}

seyHello1();
// var1
const square = (number) => {
    return number * number;
}
// var2
const square1 = number => {
    return number * number;
}

const sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 5));
//var1
const double = (number) => {
    return number * 2;
}
//var2
const double1 = number => number * 2;

//Attention!!!

const first = (a, b) => {
    return a + b;
};
const second = (a, b) => a + b;

//first EQ second

const third = (a, b) => a + b;
// var1
const createUser = (name,age) => {
    return {
        name: name,
        age: age,
    };
};
// // var2 Syntax Error
// const createUser1 = (name,age) => {
//     name: name,
//     age: age,
// }

const createUser1 = (name,age) => (
    { name: name,
    age: age,})

const createUser2 = (name,age) => (
    { name,
    age}
);

// Arrow function and Arrays
const numbers = [1, 2, 3, 4, 5];

const doubled= numbers.map(
    function ( number){
        return number * 2;
    }
);

const doubled1 = numbers.map(
    number => number * 2
);

const doubled2 = numbers.map(
    (number) => {
        return number * 2
    });

const ages=[15,33,22,67,11,55];

const adults = ages.filter(
    age => age >= 18
);

console.log(adults);//[ 33, 22, 67, 55 ]


const names = ["Anna", "David","Sarah"];

names.forEach(
    name => {
        console.log(`Hello ${name}`);
    }
); // Hello ...

const users5 = [
    { name: "Anna", age:28},
    { name: "David", age: 22},
    { name: "Sarah", age: 15}
];

const adults5 = users5.filter(
    ({age}) => age >= 18
);

console.log(adults5);

// 35 lesson