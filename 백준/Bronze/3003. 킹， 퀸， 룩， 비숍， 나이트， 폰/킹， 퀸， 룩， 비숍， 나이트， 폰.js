const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const init = [1, 1, 2, 2, 2, 8];

res = init.map((arr, i) => arr - input[i]);

console.log(res.join(" "));
