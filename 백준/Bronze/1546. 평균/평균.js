const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
const score = input[1].split(" ").map(Number);

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < T; i++) {
  sum += (score[i] / max) * 100;
}

sum /= T;

console.log(Number.isInteger(sum) ? sum.toFixed(1) : Number(sum.toFixed(6)));
