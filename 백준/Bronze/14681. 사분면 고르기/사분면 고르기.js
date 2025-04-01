let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map(Number);

let a = input[0];
let b = input[1];

console.log(a > 0 && b > 0 ? 1 : a < 0 && b > 0 ? 2 : a < 0 && b < 0 ? 3 : 4);
