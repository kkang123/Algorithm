const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input[1].split(" ");

const max = Math.max(...num);
const min = Math.min(...num);

console.log(max * min);
