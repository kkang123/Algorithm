const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((line) => line.split(" ").map(Number));

let xList = [];
let yList = [];

for (let i = 0; i < N; i++) {
  xList.push(arr[i][0]);
  yList.push(arr[i][1]);
}

const x = Math.max(...xList) - Math.min(...xList);
const y = Math.max(...yList) - Math.min(...yList);

console.log(x * y);
