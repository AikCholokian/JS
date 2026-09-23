import {readFile} from "node:fs/promises";

export async function readFromJsonFile(filePath) {
    const fileData = await readFile(filePath, "utf-8");
    return JSON.parse(fileData);
}

export async function loadFridgeData(filePath = "./fridge.json") {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Ошибка загрузки: статус ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Сбой чтения базы данных терминала:", error);
    return [];
  }
}