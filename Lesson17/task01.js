let ar1=[1,2,3,4,5,"banana",true,false,undefined,null,"apple"];
console.log(ar1);
const ar2=[1,2,3,4,5,"banana",true,false,undefined,null,"apple"];
console.log(ar2);
ar2[5]='kiwi';
console.log(ar2);
let arStr=ar1.toString();
console.log(arStr);

const ar3=['banana','kiwi','apple','orange'];
console.log(ar3);
arStr=ar3.toString();
console.log(arStr);
arStr=ar3.join('-');
console.log(arStr);
arStr=ar3.join('\n-');
console.log(arStr);
console.log(ar3.at(0));
console.log(ar3[0]);

console.log(typeof ar3);
console.log(Array.isArray(ar3));

const ar4=[1,2,3,4,5];
console.log(ar4);
const ar5=ar3.concat(ar4);
console.log(ar5);

console.log(ar3);
ar3[6]='kiwi';
console.log(ar3);
console.log(ar3.length);
console.log(ar3[5]);
delete ar3[0];
console.log(ar3);

