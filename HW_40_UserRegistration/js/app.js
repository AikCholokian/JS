
const form = document.querySelector("#registerForm");
const userNameInput = document.querySelector("#userName");
const ageInput = document.querySelector("#age");
const userManager = createUserManager()

form.addEventListener("submit",(event) => {
    event.preventDefault();
    try {
    const userName = userNameInput.value.trim();
    if (!userName) {
        throw new Error("Name is required!");
    };
    const age = Number(ageInput.value.trim());
    if (!age) {
        throw new Error("Age is required!");
    }
    const user = {
        name: userName,
        age: age,
    }
    userManager.addUser(user);
    userManager.getUsers();
    console.log(userManager.getUsers());
    } catch (error) {
        console.log(error);
    }
});
