import {add, multiply, subtract, divide} from "./math.js";
import {getCircleArea, getCircleLength, getRectangleArea, PI} from "./geometry.js";

console.log("=========Math functions==========")

console.log(`15 + 7 = ${add(15, 7)}`)
console.log(`6 * 9 = ${multiply(6, 9)}`)
console.log(`20 - 8 = ${subtract(20, 8)}`)
console.log(`100 / 4 = ${divide(100, 4)}`);
console.log(`100 / 4 = ${divide(100, 0)}`);

console.log("=========Geometry functions========")

console.log(`Circle area (r=5): ${getCircleArea(5)}`);
console.log(`Circle length (r=10): ${getCircleLength(10)}`)
console.log(`Rectangle area (8x12): ${getRectangleArea(8, 12)}`)
