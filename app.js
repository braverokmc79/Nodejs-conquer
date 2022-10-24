console.log("Hello from Daniel");
const add = require("./add");
const mult = require("./mult");
const stat = require("./stat");

const result1 = add(1, 2);
const result2 = mult(10, 2);

console.log(result1, result2);
console.log(stat.pi, stat.mean(1, 2, 3, 4, 5));