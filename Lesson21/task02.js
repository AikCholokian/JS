const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','one', 'two', 'three', 'four', 'five',];
console.log('====== IndexOf, LastIndexOf ======');
const index = arr.indexOf('two');
const lastIndex = arr.lastIndexOf('two');
console.log(index, lastIndex);

console.log('====== Includes ======');
console.log(arr.includes('two'));
console.log(arr.includes('eleven'));

console.log('====== Find, FindIndex ======');
const find = arr.find((item) => item.toLowerCase() === 'two');
const findIndex = arr.findIndex((item) => item.toLowerCase() === 'two');
console.log(find, findIndex);

console.log(arr.find((e, index) => index%2 === 0 && e.length > 3));

console.log(arr.filter((e, index) => index%2 === 0 && e.length > 3));

console.log('====== ObjArray ======');

const persons = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Mike', age: 35 },
    { name: 'Sarah', age: 40 },
    { name: 'Tom', age: 35 },
    { name: 'Anna', age: 50 },
];

const person = { name: 'John', age: 30 };
let res = persons.indexOf(person);
console.log(res);

res = persons.findIndex((p)  => p.name === person.name && p.age === person.age);
console.log(res);

res = persons.find((p) => p.age > 32);
console.log(res);

res = persons.find((p) => p.age < 32);
console.log(res);

console.log('====== forEach ======');

persons.forEach((p) => console.log(`Name: ${p.name}, Age: ${p.age}`));

persons.forEach((p, index) => console.log(`Name: ${p.name}, Age: ${p.age}, Index: ${index}`));

console.log('====== map ======');

const names = persons.map((p) => p.name.toUpperCase());
console.log(names);

res = persons.map((p, index) => (`${index+1}: Name: ${p.name}, Age: ${p.age}`));
console.log(res);

console.log('====== reduce ======');

res = arr.reduce((acc, item) => acc + item.length, 0)/arr.length;
console.log(res);

res = arr.reduce((acc, item) => acc+=item+'-', '');
console.log(res);

res = persons.reduce((youngPerson, p) => youngPerson.age < p.age ? youngPerson : p);
console.log(res);
