function math(firstNumber){
    return {
        add: (secondNumber) => firstNumber + secondNumber,
        subtract: (secondNumber) => firstNumber - secondNumber,
        multiply: (secondNumber) => firstNumber * secondNumber,
        division: (secondNumber) => secondNumber === 0 ? "Ошибка: деление на ноль!" : firstNumber / secondNumber
    };
}
const calc = math(10);
console.log(calc.multiply(2));