const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);
const mean = sum / input.length;

const sorted = input.sort((a, b) => a - b);
const median = sorted[Math.floor(input.length / 2)];

console.log(mean);
console.log(median);
