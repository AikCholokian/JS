//const app = document.getElementById('app');
//
import {products} from "./Storeervis.js";
console.log(products);
const app = document.querySelector('#app');

//
// console.log(app);
// console.dir(app);
//console.log(app === app1); // TRUE
// const li = document.createElement('li');
function createUI(app) {
    const title = document.createElement('h1');
    title.textContent = 'Список продуктов';
    app.append(title);
    const form = document.createElement('form');
    const input = document.createElement('input');
    console.dir(input);
    input.type = 'text'; // дефолтно
    input.placeholder = "Введите продукт";
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = "Добавить";
    const buttonArr = document.createElement('button');
    buttonArr.type = 'button';
    buttonArr.textContent = "Показать список";
    form.append(input, button, buttonArr);
    const list = document.createElement('ul');
    app.append(form, list);
    return {form, list, input, buttonArr};
}
// const ui = createUI(app);


const {form, input, list, buttonArr} = createUI(app);
function createLi(prod) {
    const li = document.createElement("li");
    li.textContent = prod.toLowerCase();
    list.append(li);
}

function checkDuplicate(prod) {
    const liAll = list.querySelectorAll("li");
    const liAllArray = Array.from(liAll);
    return liAllArray.some((li) => li.textContent.toLowerCase() === prod.toLowerCase());
}
function handleSubmit(e) {
    e.preventDefault();
    const productName = input.value.trim();
    if (!productName) {
        return;
    }
    console.log(productName);
    if (!checkDuplicate(productName)) {
        createLi(productName);
    }
    input.value = "";
    input.focus();

}
function handleClickAddList(e) {
    e.preventDefault();
    console.log(products);
    for (const product of products) {
        if (!checkDuplicate(product)) {
            createLi(product);
        }
    }
};
//addEventListener
form.addEventListener("submit", handleSubmit);
buttonArr.addEventListener("click", handleClickAddList);