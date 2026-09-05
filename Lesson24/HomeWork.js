/*
1.ADV. САМОСТОЯТЕЛЬНО ИЗУЧИТЬ
Переделайте программу так, чтобы она сохраняла данные в CSV файл (такая возможность есть в Экселе)
 в корне проекта вместо JSON файла.
 
ПРИМЕР CSV ФАЙЛА:
 
Наименование,Количество
qqq,2
aaa,44.2
zzzz,55
 
2. Преработайте программу с урока или из п.1 так, чтобы ввод прекращался на слова "exit" или "выход" или "стоп" или
"stop" (без учета регистра) и сохранялись данные в CSV  (JSON) файл в корне проекта.
 
3. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю удалять
продукты из списка по наименованию если мы ввели 0 количество для данного наименования.
После удаления продукта, программа должна обновлять CSV (JSON) файл
и выводить обновленный список продуктов.
 
4. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю изменять
количество продукта в списке по наименованию если мы ввели другое количество для
данного наименования но отличное от 0б. После изменения количества продукта, программа
должна обновлять CSV  (JSON) файл и выводить обновленный список продуктов.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { select, confirm, password } from "@inquirer/prompts";

async function runFridgeApp() {
  const r1 = readline.createInterface({ input, output });
  let fridge = [];

  console.log("Ведите продукты в холодильнике.Для завершения введите 'exit'.");

  while (true) {
    const name = await r1.question("Введите наименование продукта: ");
    const trimmedName = name.trim();
    const arrStop = ["exit", "выход", "стоп", "stop"];

    if (arrStop.includes(trimmedName.toLowerCase())) {
      break;
    }

    if (trimmedName === "") {
      console.log(
        "Наименование продукта не может быть пустым. Попробуйте снова.",
      );
      continue;
    }

    const countInput = await r1.question(
      `Введите количество продукта "${trimmedName}": `,
    );
    const count = Number(countInput.trim());
    if (count < 0 || Number.isNaN(count)) {
      console.log("Колличество не правильное попробуйте снова!");
      continue;
    }
    if (count === 0) {
      fridge = fridge.filter((product) => product.name !== trimmedName);
      await updateFridgeFile(fridge);
      continue;
    } else {
      let product = fridge.find((item) => item.name === trimmedName);
      if (product !== undefined) {
        product.count = count;
        await updateFridgeFile(fridge);
        continue;
      }
    }
    fridge.push({
      name: trimmedName,
      count,
    });
    await updateFridgeFile(fridge);
    console.log("Продукт добавлен:", {
      name: trimmedName,
      count: count,
    });
  }
  r1.close()
}  
async function updateFridgeFile(fridge) {
  try {
    const filePath = path.resolve("fridge.csv");
  if (fridge.length === 0) {
    await writeFile(filePath, "", "utf-8");
    
    return;
  }
  let arrKeys = Object.keys(fridge[0]);
  arrKeys = arrKeys.join(",");
  let arrProductsValue = [];
  for (let prod of fridge) {
    let product = Object.values(prod);
    arrProductsValue.push(product.join(","));
  }
  const finallyArrProducts = [arrKeys, ...arrProductsValue].join("\n");
  await writeFile(filePath, finallyArrProducts, "utf-8");
  console.log(`Данные о продукте сохранены в файле: ${filePath}`);
  console.log("Считываеи данные из файла...");
  const fileData = await readFile(filePath, "utf-8");
  console.log("Данные из файла:", fileData);
  const lines = fileData.trim().split("\n");
  const rows = lines.slice(1);
  const saveProducts = [];
  for (let row of rows) {
    if (row === "" || row === "\r") continue;
    const [name, count] = row.split(",");
    saveProducts.push({
      name: name,
      count: Number(count),
    });
  }
  console.log("Данные из файла (объекта):", saveProducts);
  //4. Выводим список продуктов с их количеством красиво
  console.log("1.Список продуктов в холодильнике:");
  saveProducts.forEach((product) => {
    console.log(`- ${product.name}: ${product.count}`);
  });
  console.log("2. Список продуктов в холодильнике:");
  console.table(saveProducts);
  }catch (error) {
      console.error("Ошибка при работе с файлом:", error.message);
  }
}  
runFridgeApp();
 