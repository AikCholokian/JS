const user = {
    id: 7,
    name: 'John',
    age: 25,
    "is Admin": true
};
console.log(user);
console.log(user.age);
console.log(user["is Admin"]);
console.log(user["age"]);
let myField = "is Admin";
console.log(user[myField]);

console.log("================================");

for (let key in user) {
    console.log(key);
    console.log(`${key}: ${user[key]}`);
}

const fruits = ["apple", "banana", "orange"];
for (let fruit in fruits) {
    console.log(fruit);
    console.log(fruits[fruit]);
}