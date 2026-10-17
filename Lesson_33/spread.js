function sum(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];
console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));

function sum1(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
}

const values = [10, 20, 30];
console.log(sum1(...values));

// Spread используется для создания нового массива или
// объекта на основе существующего

const original=[1,2,3];
const copy=[...original];
console.log(copy);  // [1,2,3]

console.log(original===copy); // false

copy.push(4);
console.log(original);  // [1,2,3]
console.log(copy);//[1,2,3,4]

// объединяем массивы

const fruits = ["apple","banana"];
const vegetables = ["carrot","tomato"];

const food=[...fruits,...vegetables];
console.log(food);  // ["apple","banana","carrot","tomato"]
