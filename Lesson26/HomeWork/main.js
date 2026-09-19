import { getUsers } from "./usersAPI.js";
import { getTemperaturFoUsers } from "./weatherApi.js"
import { findUserBigTemp } from "./weatherAnalytics.js"

const users = await getUsers();
const usersWithTemp = await getTemperaturFoUsers(users);
const userBigTemp = findUserBigTemp(usersWithTemp);
console.log(userBigTemp);
