
const form = document.querySelector("#registerForm");
const userNameInput = document.querySelector("#userName");
const ageInput = document.querySelector("#age");
const list = document.querySelector("#registeredUsers");
const er = document.querySelector("#error");
const totalUsers = document.querySelector("#totalUsers");
const userManager = createUserManager()

form.addEventListener("submit",(event) => {
    event.preventDefault();
    er.textContent = "";
    try {
    const userName = userNameInput.value.trim();
    const rawAge = ageInput.value.trim();
    const age = rawAge === "" ? null : Number(rawAge);
    const user = {
        name: userName,
        age: age,
    }
    userManager.addUser(createUser(user));
    const userList = userManager.getUsers();
    list.textContent = "";
    userList.forEach(user => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = user.name;
        const tdAge = document.createElement("td");
        tdAge.textContent = `${user.age} years old`;
        tr.append(tdName, tdAge);
        list.append(tr);
    })
    totalUsers.textContent = userList.length;
    form.reset();
    console.log(userManager.getUsers());

    } catch (error) {
        er.textContent = error.message;
        console.log(error);
    }
    finally {
        console.log("Registration attempt completed!")
    }
});
