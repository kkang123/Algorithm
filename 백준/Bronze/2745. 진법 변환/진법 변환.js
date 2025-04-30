const [N, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let res = parseInt(N, B);

console.log(res);
