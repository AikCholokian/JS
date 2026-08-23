const printArray = (arr) => {
    for (let i=0; i< arr.length; i++) {
        arr[i] = arr[i] * 10;
        console.log(i,'->',arr[i]);
    }
}

const primes = [2,3,5,7,11,13,17,19,23,29];
printArray(primes);