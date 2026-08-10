// let number=2;
// while(number<=2050){
//     console.log(number);
//     number*=2;
//     let result=number%2===0?"четное":"нечетное";
    
    // return number;

// console.log(number);// Error: result is not defined
// console.log(result);// Error: result is not defined
let number=2;
do{
    console.log(number);
    number*=2;
}while(number<=2050);

console.log("1================================");

let fruits=["apple","banana","kiwi","orange"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("2================================");

fruits=["apple","banana","kiwi","orange"];
for(let i=0;i<fruits.length;i++){
    fruits[i]=fruits[i]+" !";
    console.log(fruits[i]);
}

let counter=0;
while(counter<fruits.length){
    console.log(`${counter+1}. ${fruits[counter++]}`);
}    

// for of ----- ARRAYS

console.log("3================================");

for (let fruit of fruits){
    console.log(fruit);
    fruit="fruit";
    console.log(fruit);
    console.log(fruits);
}