// Программа запрашивает наименование продуктов в вашем холодильнике
// и их количество. После ввода всех продуктов, программа выводит список всех
// продуктов с их количеством и сохроняет данные в виде JSON в
// файл в конце проекта.
// readline.createInterface() используется для создания интерфейча
// чтения данных из стандартного ввода (stdin) и записи данных в
// стандартных вывод (stdout)

// JSON.stringify(fridge, null, 2 ) используется для преобразования

// объекта JavaScript в строку JSON,

// где null означает, что не используется функция замены replacer,

// а 2 указывает на количество пробелов для отступа в формате JSON.

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { select, confirm, password } from "@inquirer/prompts";

async function runFridgeApp() {
  const r1 = readline.createInterface({ input, output });
  const fridge = [];

  console.log("Ведите продукты в холодильнике.Для завершения введите 'exit'.");

  while (true) {
    const name = await r1.question("Введите наименование продукта: ");
    const trimmedName = name.trim();

    if (trimmedName.toLowerCase() === "exit") {
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
    const count2 = await select({
      message: "Выберите количество",
      choices: ["Шт", "Л", "Гр"],
    });
    fridge.push({
      name: trimmedName,
      count: Number.isNaN(count) ? 0 : count,
    });
    console.log("Продукт добавлен:", {
      name: trimmedName,
      count: count+count2,
    });
  }
  r1.close();
  if (fridge.length > 0) {
    const filePath = path.resolve("fridge.json");
    try {
      await writeFile(filePath, JSON.stringify(fridge, null, 2), "utf-8");
      console.log(`Данные о продукте сохранены в файле: ${filePath}`);
      console.log("Считываеи данные из файла...");
      const fileData = await readFile(filePath, "utf-8");
      console.log("Данные из файла:", fileData);

      const saveProducts = JSON.parse(fileData);
      console.log("Данные из файла (объекта):", saveProducts);
      //4. Выводим список продуктов с их количеством красиво
      console.log("1.Список продуктов в холодильнике:");
      saveProducts.forEach((product) => {
        console.log(`- ${product.name}: ${product.count}`);
      });
      console.log("2. Список продуктов в холодильнике:");
      console.table(saveProducts);
    } catch (error) {
      console.error("Ошибка при работе с файлом:", error.message);
    }
  } else {
    console.log("Список продуктов пуст. Данные не были сохранены.");
  }
}

runFridgeApp();
