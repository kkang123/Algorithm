const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

const sotred = input.sort((a, b) => b - a);

console.log(sotred.join(""));
