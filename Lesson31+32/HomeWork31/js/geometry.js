export const pi = 3.14159;

export function getCircleArea(radius) {
    const s = pi * radius * radius;
    return `Circle area (r=${radius}): ${s}`;
}

export function getRectangleArea(width, height) {
    const s = width * height;
    return `Rectangle area (${width}x${height}): ${s}`;
}

export function getCircleLength(radius) {
    const c = 2 * pi * radius
    return `Circle length (r=${radius}): ${c}`;
}