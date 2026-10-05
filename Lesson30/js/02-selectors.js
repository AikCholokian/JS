console.log('started');

const title = document.querySelector('#shopTitle');
console.log(title);
console.log(typeof title);
console.log(title.textContent);

const product = document.querySelectorAll('.product');
console.log(product);

const products = document.querySelectorAll('.product');
console.log(products);

products.forEach(product => {
    console.log(product.textContent);
});