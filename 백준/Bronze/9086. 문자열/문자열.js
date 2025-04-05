const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
let res = [];

for (let i = 1; i <= T; i++) {
  const arr = input[i].split("");
  res.push(arr[0] + arr[arr.length - 1]);
}

console.log(res.join("\n"));
