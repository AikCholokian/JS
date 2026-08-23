const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 10;
    console.log(i, "->", arr[i]);
  }
};

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
printArray(primes);

const reverseArray = (arr) => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};
reverseArray(primes);
console.log(primes);

const reverseArray2 = (arr) => {
  let temp;
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};
reverseArray2(primes);
console.log(primes);
