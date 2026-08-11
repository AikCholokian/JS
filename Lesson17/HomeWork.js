// hw17text
/*
1. Напишите программу,
которая проверяет и печаттает вердикт ,
является ли целое положительное
число любой длины счастливым попозиционно!
ЕСЛИ  Сумма цифр на четных позициях равна
сумме цифр на нечетных позициях - число счастливое,
ИНАЧЕ нет.
1210 - 1+1 = 2+0 счастливое
135 - 1+5 != 3 не счастливое
 
2. Напишите программу,
которая проверяет и печаттает вердикт ,
является ли целое положительное
число  длины 6 цифр счастливым зеркално!
ЕСЛИ  Сумма перваых 3 цифр равна
сумме цифр на последних 3 позициях - число счастливое,
ИНАЧЕ нет.
123420 -1+2+3 = 2+0 счастливое
 
712004- 7+1+2 != 0+0+4 не счастливое
*/
console.log("Задача 1");

let number = 1210;
let numberString = number.toString();

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numberString.length; i++) {
  if (i % 2 === 0) {
    evenSum += Number(numberString[i]);
  } else {
    oddSum += Number(numberString[i]);
  }
}

let result = evenSum === oddSum ? "Счастливое число" : "Не счастливое число";
console.log(result);

console .log("Задача 2");

let number2 = 123420;
let number2String = number2.toString();
if (number2String.length !== 6) {
  console.log("Число не является 6-значным");
}
let leftSum = 0;
let rightSum = 0;
for (let i = 0; i < 3; i++) {
  leftSum += Number(number2String[i]);
  rightSum += Number(number2String[number2String.length - 1 - i]);
}
let result2 = leftSum === rightSum ? "Счастливое число" : "Не счастливое число";
console.log(result2);

console.log("Задача 3");

let arrayNumbers = [];
while (number>0) {
    arrayNumbers.unshift(number % 10);
    number = Math.floor(number / 10);
}
console.log(arrayNumbers);
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 === 0) {
    evenSum += Number(arrayNumbers[i]);
  } else {
    oddSum += Number(arrayNumbers[i]);
  }
}      
let result3 = evenSum === oddSum ? "Счастливое число" : "Не счастливое число";
console.log(result3);

console.log("Задача 4");

let arrayNumbers2 = [];
while (number2>0) {
    arrayNumbers2.unshift(number2 % 10);
    number2 = Math.floor(number2 / 10);
}
console.log(arrayNumbers2);
if (arrayNumbers2.length !== 6) {
  console.log("Число не является 6-значным");
}
for (let i = 0; i < 3; i++) {
  leftSum += Number(arrayNumbers2[i]);
  rightSum += Number(arrayNumbers2[arrayNumbers2.length - 1 - i]);
}
let result4 = leftSum === rightSum ? "Счастливое число" : "Не счастливое число";
console.log(result4);
