// print 5 раз слово "Hello" в консоль
// for number in range(5):
for (let number = 0; number < 5; number++) {
    console.log("Hello");
}
let n=5;
n=n+2;
console.log(n);// 7;
n=n-1;// n=n-1;
console.log(n);// 6;
n+=1;
console.log(n);// 7;
n-=1;
n++;
console.log(n);// 7;
n--;
console.log(n);// 6;
console.log(n++);//  6;
console.log(n);//  7;

console.log(++n);//  8 используется редко

console.log("================================");

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 2; i < 2050; i*=2) {
    console.log(i);
}