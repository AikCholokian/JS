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


// Spread and Object

console.log("==========================");
const user = {
    name: "John",
    age: 30,
    city: "New York"
};

const newUser = user; // ERROR
newUser.age=31;
console.log(user.age);//31
console.log(newUser.age);//31

console.log(user===newUser)//true

const newUser1={...user};

newUser1.age=50;
console.log(user.age);//31
console.log(newUser1.age)//50

const newUser2={...user, age:99};
console.log(newUser2.age);//99

const newUser3={age:99,...user}; //ERROR
console.log(newUser3.age);//31

const updateUser = {
    ...user,
    city:"London",
    zip: 123456
}

console.log(user) // "name": "John", "age": 31, "city": "New York"

console.log(updateUser) //{"name": "John", "age": 31, "city": "London", "zip": 123456}


const contactData = {
    email: "john@example.com",
    phone: "123-456-7890"
}

const newUser4={...user,...contactData} ;
console.log(newUser4); //{"name": "John", "age": 31, "city": "New York", "email": "john@example.com", "phone": "123-456-7890"}

console.log("================Shallow copy");

const user5 = {
    name: "John",

    address: {
        city: "New York",
        zip: 10001
    }
};

const copy5={...user5};
console.log(user5===copy5); //false
console.log(copy5); //{"name": "John", "address": { "city": "New York", "zip": 10001 }}

copy5.address.zip=999999999;

console.log(user5.address.zip);//999999999
console.log(copy5.address.zip);//999999999

console.log(user5.address===copy5.address); //true

// копируем вложенный объект отдельно