// console.log("App started")

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

const result1 = add(10,5);
const result2 = subtract(10,5);
const result3 = multiply(10,5);

console.log(result1);
console.log(result2);
console.log(result3);

const users = [
    {id:1, name: "John", age: 30},
    {id:2, name: "Jane", age: 17},
    {id:3, name: "Bob", age: 40}
];

function getAdults(users){
    return users.filter(user => user.age >= 18);
}

const adults = getAdults(users);
console.log(adults);

const result = document.querySelector("#result");

function renderUsers(users){
    users.forEach(user => {
        const p = document.createElement("p");
        p.textContent = `${user.name} is ${user.age} years old`;
        result.append(p);
    });  //  создай - заполни - размести
}

renderUsers(adults);

// in app+математика данные пользователей+фильтрация
// пользователей+работа с DOM+запуск приложения


// app.js  math  users  DOM  API  validation  events  businessLogic ....