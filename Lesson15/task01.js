console.log("Hello, World!");
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    email: "john@example.com",
    city: "New York",
    "is a developer": true
}
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user.email);
console.log(user.city);
console.log(user);
console.log(user["name"]);
let fieldname = "age";
console.log(user[fieldname]);
user["secondName"] = "Doe";
console.log(user.secondName);
console.log(user["is a developer"]);
console.log(user);

console.log("==============");

let userJson = JSON.stringify(user);
console.log(userJson);
console.log(typeof userJson);
console.log(userJson.name);

let productJson = '{"name": "Laptop", "price": 1200, "inStock": true}';
let product = JSON.parse(productJson);
console.log(typeof product); //object
console.log(product.name); // Laptop



