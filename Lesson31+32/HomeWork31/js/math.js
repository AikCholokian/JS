export function add(a, b) {
    const c = a + b
    return `${a} + ${b} = ${c}`;
}
export function subtract(a, b) {
    const c = a - b
    return `${a} - ${b} = ${c}`;
}
export function multiply(a, b) {
    const c = a * b
    return `${a} * ${b} = ${c}`;
}
export function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    const c = a / b
    return `${a} / ${b} = ${c}`;
}
