console.log("task03 run");

function getJsonFromString(content) {
    const json = JSON.parse(content);
    return json;
}
try {
    const text = '{username:"Johnson","age":"25"}';
    const result = getJsonFromString(text);
    console.log(result);
}catch (error) {
    console.log("Ошибка парсинга JSON");
    console.log(error.message);
}

console.log("=======================")

try {
    const text = '{"username":"Johnson","age":"25"}';
    const result = getJsonFromString(text);
    console.log(result);
}catch (error) {
    console.log("Ошибка парсинга JSON");
    console.log(error.message);
}
console.log('task03 end');