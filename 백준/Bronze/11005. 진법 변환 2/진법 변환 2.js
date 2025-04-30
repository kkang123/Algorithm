const [N, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let res = N.toString(B).toUpperCase();

console.log(res);
