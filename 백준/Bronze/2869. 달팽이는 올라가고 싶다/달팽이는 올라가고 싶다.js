const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, V] = input;

const day = Math.ceil((V - B) / (A - B));

console.log(day);
