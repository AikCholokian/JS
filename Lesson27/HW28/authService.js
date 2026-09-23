export function getUserByNameOrCreateGuest(users, userName) {
    const clearName = userName.trim().toLowerCase();
    const userFind = users.find(user => user.name.toLowerCase() === clearName);
    if(userFind) {
        return userFind
    }else{
        const newUser = {
            name: userName.trim(),
            role: "GUEST"
        }
        return newUser;
    } 
}

