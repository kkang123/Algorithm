let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const len = input.length;
let sum = [];

for (let i = 0; i < len; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  sum.push(a + b);
}

console.log(sum.join("\n"));
