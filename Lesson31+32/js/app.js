// console.log("App started")


import { add, subtract } from "./math.js";

const result = add(10,5);
console.log(result);
console.log(subtract(10,5))
// console.log(multiply(10,5))

// app.js  использует функцию из   math.js
// app.js зависит от math.js
// dependency - зависимость

// app.js depends on math.js

import {PI}  from "./math.js";

console.log(PI);

// можно экспортировать переменную константу
// функцию класс объект


console.log("==================================")

import {users, getAdults as filterAdults} from "./users.js";
import renderUsers from "./ui.js";

// console.log(users);
// const adults = getAdults(users);
// console.log(adults);

const container = document.querySelector("#result");
const adults = filterAdults(users);
renderUsers(adults, container);
console.log("=====================================")