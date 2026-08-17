// number
let a = -3.94159;
let res = Math.floor(a);
console.log(res);
a = 1.77;
res = Math.round(a);
console.log(res);

res = Math.PI;
console.log(res);

console.log(Math.random());

a = -1.11;
res = Math.trunc(a);
console.log(res);

res = Math.PI;
res = res.toFixed(4);
console.log(res, typeof res);
res = +res;
console.log(res, typeof res);

const str = "Hello Java Script!!!";
console.log(str.length);
res = str.charAt(19);
console.log(res);
res = str[19];
console.log(res);
for (s of str) {
  console.log(s);
}

res = str.indexOf("avaaaaa");
console.log(res);

res = str.lastIndexOf("a");
console.log(res);

res = str.substring(4);
console.log(res);

res = str.slice(-4, -1);
console.log(res);
