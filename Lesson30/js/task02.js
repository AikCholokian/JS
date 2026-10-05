console.log("task02 run");
function getJsonFromString(content) {
    const json = JSON.parse(content);
    return json;
}

let text = '{"username":"Johnson","age":"25"}';
let result = getJsonFromString(text);
console.log(result);
text = '{username:"Johnson","age":"25"}';
result = getJsonFromString(text);
console.log(result);
console.log('task02 end');