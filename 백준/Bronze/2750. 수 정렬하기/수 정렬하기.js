const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const set = [...new Set(input)];

const res = set.sort((a, b) => a - b).join("\n");

console.log(res);
