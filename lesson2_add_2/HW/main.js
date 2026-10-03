
import {readArr} from "./readServise.js";
import {createLi} from "./createServise.js";
import {checkDuplicate} from "./duplicateServise.js";

const products = [
    {
        id: 1,
        name: "Молоко",
        category: "Молочные продукты",
        bought: false
    },
    {
        id: 2,
        name: "Хлеб",
        category: "Выпечка",
        bought: true
    },
    {
        id: 3,
        name: "Сыр",
        category: "Молочные продукты",
        bought: false
    },
    {
        id: 4,
        name: "Яблоки",
        category: "Фрукты",
        bought: false
    }
];

const app = document.querySelector('#app');
function createUI(app) {
    const title = document.createElement('h1');
    title.textContent = 'Список продуктов';
    app.append(title);
    const list = document.createElement('ul');
    app.append(list);
    readArr(products,list);
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = "Введите название продукт";
    const inputCategory = document.createElement('input');
    inputCategory.type = 'text';
    inputCategory.placeholder = "Введите категорию продукта"
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = "Добавить";
    app.append(form)
    form.append(button,inputName, inputCategory);
    return {list, form, inputName, inputCategory};}

const {list, form, inputName, inputCategory} = createUI(app);
function handleSubmit(e) {
    e.preventDefault();
    const productName = inputName.value.trim();
    if (!productName) {
        return;
    }
    const productCategory = inputCategory.value.trim();
    if (!checkDuplicate(productName, products)) {
        products.push({
            id: products[products.length - 1].id + 1,
            name: productName,
            category: productCategory,
            bought: false,
        });
    }

    console.log(products);
    list.append(createLi(productName, productCategory));
    inputName.value = "";
    inputCategory.value = "";
    inputName.focus();

}
form.addEventListener("submit", handleSubmit);
