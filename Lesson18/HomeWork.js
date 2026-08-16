/*
HW_18_TEXT
 
1.Напишите четыре функции для основных математических действий + - * /
2.Напишите функцию калькулятор, принимающую при вызове два числа
и функцию операции над этими числами и возвращающую результат вычислений
3.Попробуйте написать все эти функции через function-declaration.
4.Попробуйте написать все эти функции через  function-expression.
5.***
Попробуйте написать все эти функции через стрелочный синтаксис
    который имеет свою специфику и подходит не всегда.
 */
 
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return "Ошибка: деление на 0";
//   }
//   return a / b;
// }

// console.log(multiply(2, 3))

// const add = function(a, b) {
//   return a + b;
// };

// const subtract = function(a, b) {
//   return a - b;
// };

// const multiply = function(a, b) {
//   return a * b;
// };

// const divide = function(a, b) {
//   return b === 0 ? "Ошибка: деление на 0" : a / b;
// };

// console.log(multiply(3, 3))


// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => (b === 0 ? "Ошибка: деление на 0" : a / b);

// console.log(multiply(3, 3))

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Ошибка: деление на 0" : a / b;
    default:
      return "Неизвестная операция";
  }
};

console.log(calculate(3, 3, "-"))


function math(firstNumber){

}
const calc = math(10);
console.log(calc.plus(5));