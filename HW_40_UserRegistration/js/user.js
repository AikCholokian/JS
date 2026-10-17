function createUser(user) {
    const { name, age } = user;
    if (!name) {
        throw new Error("Name is required");
    }

    if (age === undefined || age === null) {
        throw new Error("Age is required");
    }
    if (!Number.isInteger(age)) {
        throw new Error("Invalid age");
    }
    if (age < 0 || age > 120) {
        throw new Error("Invalid age");
    }
    return {
        id: Date.now(),
        ...user,
    };
}