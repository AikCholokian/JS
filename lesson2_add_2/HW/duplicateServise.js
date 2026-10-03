export function checkDuplicate(name, arr) {
    return arr.some((item) => item.name === name.toLowerCase());
};