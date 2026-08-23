const price = [30.0, 20.0, 50.0, 10.0, 40.0];

const higPrice = price.filter((p) => p > 30);
console.log(higPrice);

const numbers = [1, 5, 2, 9, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum);

const mult = numbers.reduce((acc, v) => acc * v, 1);
console.log(mult);

const avgResult = numbers.reduce((acc, v) => acc + v, 0) / numbers.length;
console.log(avgResult);

const cats = [
  { name: "Whiskers", age: 2, color: "gray", weight: 4.5 },

  { name: "Fluffy", age: 5, color: "white", weight: 6.0 },

  { name: "Mittens", age: 3, color: "black", weight: 5.2 },

  { name: "Shadow", age: 2, color: "gray", weight: 8.8 },

  { name: "Simba", age: 1, color: "orange", weight: 3.9 },
];
const totalWeight = cats.reduce((acc, cat) => acc + cat.weight, 0);
console.log(totalWeight);

const catWithAge2 = cats.find((cat) => cat.age === 2);
console.log(catWithAge2);

const isHeavyCat = cats.some((cat) => cat.weight > 6.0);

if (isHeavyCat) {
  console.log("Есть кот весом больше 6 кг.");
} else {
  console.log("Котов весом больше 6 кг нет.");
}

const isKittenPresent = cats.some((cat) => cat.age <= 1);

if (isKittenPresent) {
  console.log("Есть котенок младше 1 года.");
} else {
  console.log("Котят младше 1 года нет.");
}

const allCatsAreGray = cats.every((cat) => cat.color === "gray");

if (allCatsAreGray) {
  console.log("Все коты серого цвета.");
} else {
  console.log("Не все коты серого цвета.");
}

const allCatsAreFat = cats.every((cat) => cat.weight > 3.0);

if (allCatsAreFat) {
  console.log("Все коты весами больше 3 кг.");
} else {
  console.log("Не все коты весами больше 3 кг.");
}

let sortedCats = cats.sort((cat2, cat1) => cat1.weight - cat2.weight);
console.log(sortedCats);

let sortedCatsbyname = cats.sort((cat1, cat2) =>
  cat1.name.localeCompare(cat2.name),
);
console.log(sortedCatsbyname);

const numbers2 = [56, 27, 91, 49, 38, 83, 12, 76, 46, 23, 44];
// Найти наибольшее четное, которое при этом не больше 50.

// Если такого числа нет, то вернуть null.

const result =numbers2
    .filter((num) => num % 2 === 0 && num <= 50)
    .sort((a, b) => b - a)
    [0] || null;

console.log(result);
