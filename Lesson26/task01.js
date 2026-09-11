const products = [

 {name: "Молоко", count: 2.0, price: 1.5, expDate: "2024-07-01"},

 {name: "Хлеб", count: 0.5, price: 0.8, expDate: "2024-06-15"},

 {name: "Яйца", count: 12, price: 2.5, expDate: "2024-07-10"},

];

console.log("=== Содержимое холодильника ===");

console.log(products);
const p1 = {name: "Сыр", count: 0.3, price: 3.0, expDate: "2024-07-20"};
products.push(p1);
console.log(products);

const res = JSON.stringify(products, null, 2)
console.log(res);

console.log(JSON.parse(res));
