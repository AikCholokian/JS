import {add, multiply, subtract, divide} from "./math.js";
import {getCircleArea, getCircleLength, getRectangleArea, pi} from "./geometry.js";

console.log("=========Math functions==========")

console.log(add(15, 7));
console.log(multiply(6, 9));
console.log(subtract(20, 8));
console.log(divide(100, 4));
console.log(divide(100, 0));

console.log("=========Geometry functions========")

console.log(getCircleArea(5));
console.log(getCircleLength(8, 12))
console.log(getRectangleArea(10));
