const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const res = input.sort((a,b) => a - b);

console.log(res.join("\n"))