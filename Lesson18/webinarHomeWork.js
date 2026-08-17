// Calculator

function math(firstNumber){
    return {
        add: (secondNumber) => firstNumber + secondNumber,
        subtract: (secondNumber) => firstNumber - secondNumber,
        multiply: (secondNumber) => firstNumber * secondNumber,
        division: (secondNumber) => secondNumber === 0 ? "Ошибка: деление на ноль!" : firstNumber / secondNumber
    };
}
const calc = math(10);
// console.log(calc.multiply(2));

//Calculator Pro v 1.0

function math(firstNumber){
    let result = firstNumber;
    return {
        add: function(x) {
            result += x;
            return this
        },
        subtract: function(x) {
            result -= x;
            return this
        },
        multiply: function(x) {
            result *= x;
            return this
        },
        division: function(x) {
            if (x === 0) {
              return 'Ошибка: деление на ноль!'  
            }
            result /= x;
            return this
        },
        res: function(){
            return result
        } 
    };
}    
 
const calc = math(10);
console.log(calc.multiply(2));