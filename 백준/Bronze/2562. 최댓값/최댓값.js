let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = Math.max(...input);
let index = input.indexOf(max) + 1;

console.log(`${max}\n${index}`);
