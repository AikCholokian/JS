import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";

const books = [
  { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1940 },
  { title: "1984", author: "Джордж Оруэлл", year: 1949 },
  { title: "Гарри Поттер", author: "Дж. К. Роулинг", year: 1997 },
  { title: "Маленький принц", author: "Антуан де Сент-Экзюпери", year: 1943 }
];

async function booksCsv(arr, name) {
    if (arr.length > 0) {
        const booksPath = path.resolve(name)
        try {
            let arrKeys = Object.keys(arr[0]);
            arrKeys = arrKeys.join(',');
            let booksArr = [];
            for (let book of arr) {
                let bookArr = Object.values(book);
                booksArr.push(bookArr.join(','));
            } 
            const finallyArrBooks = [arrKeys, ...booksArr].join('\n');
            
        }
    }
}