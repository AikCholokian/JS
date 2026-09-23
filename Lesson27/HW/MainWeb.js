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

export function startClock(clockElement) {
  if (!clockElement) {
    console.warn("Элемент для часов не найден");
    return;
  }

  function update() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clockElement.textContent = `SYS_TIME: [ ${hours}:${minutes}:${seconds} ]`;
  }

  update();

  return setInterval(update, 1000);
}

function renderInventory(items, containerElement) {
  if (!containerElement) {
    console.error("Контейнер для инвентаря не найден");
    return;
  }

  containerElement.innerHTML = "";

  if (!items || items.length === 0) {
    containerElement.innerHTML = `
      <div class="log-line empty">
        [ СИСТЕМА: ОТСЕКИ ПУСТЫ // НЕТ ДАННЫХ ]
      </div>
    `;
    return;
  }

  const linesHtml = items
    .map((item) => {
      const name = item.name;
      const count = item.count;

      return `
        <div class="log-line">
          <span class="item-prefix">></span>
          <span class="item-name">${name}</span>
          <span class="item-spacer"></span>
          <span class="item-qty">${count}</span>
        </div>
      `;
    })
    .join("");

  containerElement.innerHTML = linesHtml;
}

async function init() {
  const inventoryContainer = document.querySelector("#inventory-list");
  const clockContainer = document.querySelector("#hud-clock");

  startClock(clockContainer);

  const products = await loadFridgeData("./fridge.json");
  renderInventory(products, inventoryContainer);
}

init();
