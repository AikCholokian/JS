const numbers = [7,3,9,22,11,3,7,2,1,0,9,4,5,6,7];

console.log('====== Упорядоченный массив ======');
console.log(numbers.sort((a, b) => a - b));

console.log('====== Сортировка массива по случайной последовательности ======');
// numbers.sort((a, b) => Math.random() - 0.5);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);

console.log('====== Фильтрация массива по условию ======');

function myFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
    return -1;
}

let res= myFindIndex(numbers, (item) => item === 22);
console.log(res);

function checkEven(item) {
    return item % 2 === 0;
}

res = myFindIndex(numbers, checkEven);
console.log(res);

console.log('====== objectSort ======');

const persons = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Mike', age: 35 },
    { name: 'Sarah', age: 40 },
    { name: 'Tom', age: 35 },
    { name: 'Anna', age: 50 },
];

persons.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
});

console.log(persons);



