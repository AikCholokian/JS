import { readFromJsonFile } from "./fileService.js";
import { getUserByNameOrCreateGuest } from "./authService.js";
import { FRIDGE_FILE, USERS_FILE } from "./config.js";
import { createBasePromptByRole, createPrompt } from "./promptService.js";
import { askAi } from "./aiService.js";
import { errorModal } from "./errorService.js";

const users = await readFromJsonFile(USERS_FILE);
const products = await readFromJsonFile(FRIDGE_FILE);

const form = document.getElementById("searchForm");
const userNameInput = document.getElementById("userName");
const dishTitleInput = document.getElementById("dishTitle");
const result = document.getElementById("result");
const spin = document.getElementById("spinner");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userName = userNameInput.value.trim();
  if (!userName) {
    errorModal("User name is required");
    return;
  }
  const authenticatedUser = getUserByNameOrCreateGuest(users, userName);
  const dishTitle = dishTitleInput.value.trim();
  if (!dishTitle) {
    errorModal("Dish title is required");
    return;
  }
  console.log(dishTitle, authenticatedUser);
  try {
    const basePrompt = createBasePromptByRole(authenticatedUser);
    result.textContent = "";
    spin.hidden = false;
    const prompt = createPrompt(basePrompt, dishTitle, products);
    const answer = await askAi(prompt);
    result.textContent = answer;
  } catch (error) {
    errorModal(error.message);
  } finally {
    spin.hidden = true;
  }
});
