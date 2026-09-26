import {errorModal} from "./errorService.js";
import {createList} from "./dataService.js";

const form = document.querySelector("form");
const productsInput = document.getElementById("products");
const btn = form.querySelector("button");
const listProducts = document.getElementById("productList");



btn.addEventListener("click", (event) => {
    event.preventDefault();
    const product = productsInput.value.trim();
    if (!product) {
        errorModal("Название продукта не может быть пустым!");
        return;
    }
    const li = createList(product);
    listProducts.prepend(li);
    productsInput.value = "";
    productsInput.focus();
})

listProducts.addEventListener("click", (event) => {
    const click = event.target.closest("li");
    if (click === null || click === undefined) {
        return;
    }
    const check = click.querySelector("input");
    if ( check.hidden === true) {
        return check.hidden = false;
    }else {
        return check.hidden = true;
    }
})