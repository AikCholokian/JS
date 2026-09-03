import { input, select, confirm, password } from "@inquirer/prompts";

async function runCli() {
  try {
    // 1. Текстовое поле с дефолтным значением
    const name = await input({
      message: "Введите ваше имя:",
      default: "Аноним",
    });

    // 2. Поле с выбором из списка
    const color = await select({
      message: "Выберите ваш любимый цвет:",
      choices: ["Красный", "Зеленый", "Синий"],
    });

    const role = await select({
      message: "Выберите вашу роль:",
      choices: [
        { name: "Администратор", value: "admin" },
        { name: "Пользователь", value: "user" },
        { name: "Гость", value: "guest" },
      ],
    });

    // 3. Поле с подтверждением (да/нет)
    const apiPassword = await password({
      message: "Введите ваш пароль:",
      mask: "*",
    });

    // 4. Поле для ввода пароля (скрытый ввод)
    const isConfirmed = await confirm({
      message: "Вы уверены, что хотите продолжить?",
      default: false,
    });

    // Вывод введенных данных
    console.log("Имя:", name);
    console.log("Любимый цвет:", color);
    console.log("Роль:", role);
    console.log("Подтверждено:", isConfirmed);
    console.log("Пароль:", apiPassword);
  } catch (error) {
    console.error("Ошибка при вводе данных:", error);
    console.log("Пожалуйста, попробуйте снова.");
  }
}

runCli();
