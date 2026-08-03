// без обьектов
let userName = 'John'; // объявление переменной userName и присвоение ей значения "John"
let userAge = 30; // объявление переменной userAge и присвоение ей значения 30
let isStudent = true; // объявление переменной isStudent и присвоение ей значения true
console.log('Name=',userName); // вывод значения переменной userName
console.log('Age=',userAge); // вывод значения переменной userAge

// с обьектами
let user = { // объявление объекта user с тремя свойствами: name, age и isStudent
  name: 'John', // свойство name со значением "John"
    age: 30, // свойство age со значением 30
    isStudent: true // свойство isStudent со значением true
};
console.log('Name=',user.name);
console.log(user);
user.age = 31; // изменение значения свойства age объекта user на 31
console.log('Age=',user.age);
user.email = 'John@example.com'; // добавление нового свойства email объекту user
console.log('Email=',user.email);
console.log(user);
delete user.isStudent; // удаление свойства isStudent объекта user
console.log(user);

console.log(typeof user); // вывод типа объекта user

const user2 = { // объявление константы user2 с объектом, содержащим свойства name, age и isStudent
  name: 'Alice', // свойство name со значением "Alice"
  age: 25, // свойство age со значением 25  
    isStudent: false // свойство isStudent со значением false
};
console.log(user2);
user2.age = 26; // изменение значения свойства age объекта user2 на 26
console.log(user2);
delete user2.isStudent; // удаление свойства isStudent объекта user2
console.log(user2);