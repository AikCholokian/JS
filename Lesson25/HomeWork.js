import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

// file handling functions
// =================================== //
async function readFromJsonFile(filePath) {
  try {
    const fileData = await readFile(filePath, "utf-8");
    if (fileData.trim() === "") {
      return [];
    } else {
      return JSON.parse(fileData);
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    } else {
      throw error;
    }
  }
}

async function writeToJsonFile(filePath, data) {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`Данные о продуктах сохранены в файл: ${filePath}`);
  } catch (error) {
    console.error("Ошибка при работе с файлом:", error.message);
  }
}

//user interaction functions
// ============================== //
const stopWords = ["exit", "выход", "стоп", "stop"];
function stop(words) {
  return stopWords.includes(String(words).toLocaleLowerCase());
}
async function nameProducts(rl) {
  while (true) {
    let product = await rl.question("Введите наименование продукта: ");
    const trimmedName = product.trim();
    if (trimmedName === "") {
      // Проверка на пустую строку
      console.log(
        "Наименование продукта не может быть пустым. Попробуйте снова.",
      );
      continue;
    } else {
      return trimmedName;
    }
  }
}

async function countProducts(rl, product) {
  while (true) {
    let count = await rl.question(`Введите количество продукта "${product}": `);
    count = count.trim();
    if (stop(count)) {
      return null;
    }
    if (count === "") {
      console.log("Поле не может быть пустым.");
      continue;
    }
    count = Number(count);
    if (Number.isNaN(count) || count < 0) {
      console.log("Количество введено некорректно. Попробуйте снова.");
      continue;
    }
    return count;
  }
}

async function priceProducts(rl, product) {
  while (true) {
    let price = await rl.question(`Введите цену продукта "${product}": `);
    price = price.trim();
    if (stop(price)) {
      return null;
    }
    if (price === "") {
      console.log("Поле не может быть пустым.");
      continue;
    }
    price = Number(price);
    if (Number.isNaN(price) || price < 0) {
      console.log("Стоимость введена некорректно. Попробуйте снова.");
      continue;
    }
    return price;
  }
}
// data processing functions
function removeProduct(fridge, product) {
  const idx = fridge.findIndex(
    (item) => item.name.toLocaleLowerCase() === product.toLocaleLowerCase(),
  );
  if (idx !== -1) {
    fridge.splice(idx, 1);
    console.log(`Продукт "${product}" удалён из списка.`);
  } else {
    console.log("Продукт не найден.");
  }
}

function addOrUpdateProduct(fridge, name, count, price) {
  const idx = fridge.findIndex(
    (item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );
  if (idx !== -1) {
    fridge[idx].count += count;
    console.log(`Количество продукта "${name}" обновлено:`, fridge[idx]);
    fridge[idx].price = price;
    console.log(`Цена продукта "${name}" обновлено:`, fridge[idx]);
  } else {
    fridge.push({ name, count, price });
    console.log("Продукт добавлен:", {
      name: name,
      count,
      price,
    });
  }
}

function displayFridgeContents(fridge) {
  console.log("=== Содержимое холодильника ===");
  if (fridge.length === 0) {
    console.log("Холодильник пуст.");
  } else {
    fridge.forEach((product, index) => {
      console.log(
        `${index +1}. ${product.name}: ${product.count}: ${product.price}`,
      );
    });
  }
}

// main function
async function runFridgeApp(fileName) {
  const filePath = path.resolve(fileName);
  const rl = readline.createInterface({ input, output });
  const fridge = await readFromJsonFile(filePath);
  console.log("Программа для учета продуктов в холодильнике.");
  console.log(
    "Введите продукты в холодильнике. Для завершения введите  ",
    stopWords.join(", "),
    " (без учёта регистра).",
  );
  while (true) {
    const name = await nameProducts(rl);
    if (stop(name)) {
      break;
    }
    const countInput = await countProducts(rl, name);
    if (countInput === null) {
      break;
    }
    if (countInput === 0) {
      removeProduct(fridge, name);
      continue;
    }
    const priceInput = await priceProducts(rl, name);
    if (priceInput === null) {
      break;
    }
    console.log("Текущий список продуктов:");
    addOrUpdateProduct(fridge, name, countInput, priceInput);
    console.table(fridge);
  }
  rl.close();
  displayFridgeContents(fridge);
  writeToJsonFile(filePath, fridge);
}
const fileName = "fridge.json";
runFridgeApp(fileName);
