export let a = 30, b = 20, result = 0;

function sum() {
    result = a + b;
    return result;
}

export function multiply() {
    result = a * b;
    return result;
}

export { sum as add };