/*

HW_20_TEXT

1.Создайте массив на 10 строк.

 

2.Создайте функцию comparator(a,b), которая  принимает 2 строки  и 

возвращает 1 - если первая строка длиннее, -1 если вторая строка длиннее, 

0 если равны.  

Используйте синтаксис function declaration, вызовите эту фкнкцию и 

напечатайте результат.

Напишите эту же функцию используя Function Expression и Arrow Function  

3.Напишите функцию, которая принимает массив и функуию-компаратор, 

и возвращает самое большое значение в массиве. Вызовите эту функцию, передав 

ей массив строк, полученный в первой задаче и функцию, написанную во второй задаче.

*/

const strings = [
  "forest",
  "river",
  "mountain",
  "sky",
  "ocean",
  "breeze",
  "cloud",
  "stone",
  "valley",
  "shadow",
];
// function declaration
function comparator(str1, str2) {
  if (str1.length > str2.length) {
    return 1;
  } else if (str1.length < str2.length) {
    return -1;
  } else {
    return 0;
  }
}

console.log(comparator(strings[0], strings[2]));

// Function Expression

const res = function comparator(str1, str2) {
  if (str1.length > str2.length) {
    return 1;
  } else if (str1.length < str2.length) {
    return -1;
  } else {
    return 0;
  }
};
console.log(res(strings[0], strings[3]));

// Arrow Function

const res2 = (str1, str2) => {
  if (str1.length > str2.length) {
    return 1;
  } else if (str1.length < str2.length) {
    return -1;
  } else {
    return 0;
  }
};

console.log(res2(strings[0], strings[8]));

function findMaxStr(arr, func) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (func(arr[i], max) > 0) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxStr(strings, res2));