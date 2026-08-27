/*
1.

a) Создайте несколько объектов-продуктов. В каждом объекте 

должно быть поле name (название), description(описание), price(цена), 

info (функция, которая формирует строку вида:

`товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...`

 

b) создайте конструктор для создания объектов-товаров. 

Создайте несколько товаров

 

с) Создайте массив из товаров. Напишите функцию, которая

выводит в консоль информацию о всех товарах в виде:

```

Tовар 1

    name: notebook lenovo thinkpad

    price: 1283

    description: .....

    info: ....

```  

т.е. `поле: значение` При этом: поля, которые являются 

функциями, нужно выводить результат работы функции 

(не текст функции)

*/

const objectProduct = {
  name: "notebook lenovo thinkpad",
  description: "cpu intel core7, ram:16gb ...",
  price: 1283,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  },
};

const objectProduct2 = {
  name: "notebook Dell XPS 13",
  description: "cpu intel core i7, ram:32gb ...",
  price: 2836,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  },
};

function Product(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.info = function () {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  };
}

let product3 = new Product(
  "notebook HP EliteBook 840 G7",
  "cpu intel core i5, ram:8gb ...",
  1154,
);
let product4 = new Product(
  "notebook Intel ",
  "cpu intel core i9, ram:64gb ...",
  3687,
);
console.log(product3.info());
console.log(product4.info());

console.log("====== Массив объектов-товаров ======");

const products = [
  {
    name: "notebook lenovo thinkpad",
    description: "cpu intel core7, ram:16gb ...",
    price: 1283,
    info: function () {
      return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    },
  },
  {
    name: "notebook Dell XPS 13",
    description: "cpu intel core i7, ram:32gb ...",
    price: 2836,
    info: function () {
      return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    },
  },
  {
    name: "notebook HP EliteBook 840 G7",
    description: "cpu intel core i5, ram:8gb ...",
    price: 1154,
    info: function () {
      return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    },
  },
  {
    name: "notebook Intel ",
    description: "cpu intel core i9, ram:64gb ...",
    price: 3687,
    info: function () {
      return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    },
  },
];

function printProducts() {
  products.forEach((p, i) =>
    console.log(
      `Товар ${i + 1}\nname: ${p.name}\nцена: ${p.price}\nописание: ${p.description}\nинформация: ${p.info()}`,
    ),
  );
}

printProducts();
