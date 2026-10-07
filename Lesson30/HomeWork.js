import axios from "axios";

async function getUsers() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log("Ошибка статус:", error.response.status);
            throw error;
        } else {
            console.log("Ошибка:", error.message);
            throw error;
        }
    }


}

function checkUsers(users) {
    for (const user of users) {
        try {
            if (typeof user.id !== "number") {
                throw new Error("Id is a not a number");
            }
            if (!user.name) {
                throw new Error("Name is required");
            }
            if (!user.email) {
                throw new Error("Email is required");
            }
            console.log("User is valid: " + user.name);
        }catch (error) {
            console.error(error);
        }
    }
}

try {
    const allUsers = await getUsers();
    allUsers[0].email = null;
    checkUsers(allUsers);
}catch (e) {
    console.error(e);
}

