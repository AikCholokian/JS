function sayHello(name = 'anonimus'){
    console.log(`Hello, ${name}`);
    
}
sayHello('John');
sayHello();
sayHello('Vasya', 1,2,3,true);

function print(a,b,...args){
    console.log(a);
    console.log(b);
    for (let elements of args){
        console.log(`(${typeof elements}): ${elements}`);
    }
}    

print(1,2,3,4,5)
print('a','b',[1,2,3,4,])    
    
