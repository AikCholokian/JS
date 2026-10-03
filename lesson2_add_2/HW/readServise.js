import {createLi} from "./createServise.js";


export function readArr(arr, list) {
    for (const product of arr) {
        if (product.bought === true) {
            const liTrue = createLi(product.name, product.category);
            liTrue.classList.toggle("bought");
            list.append(liTrue);
        } else {
            list.append(createLi(product.name, product.category));
        }

    }
}