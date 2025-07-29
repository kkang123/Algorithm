const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

let res = N / M;
let one = N % M;

console.log([res, one].join("\n"));
