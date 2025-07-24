const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [T, N] = input.shift().split(" ").map(Number);
const temp = input[0].split(" ").map(Number);
const res = [];

for (let i = 0; i < temp.length - N + 1; i++) {
  let sum = 0;
  for (let j = 0; j < N; j++) {
    sum += temp[i + j];
  }
  res.push(sum);
}

console.log(Math.max(...res));
