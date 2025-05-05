const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let xList = [];
let yList = [];

for (let [x, y] of input) {
  xList.push(x);
  yList.push(y);
}

const x =
  xList[0] === xList[1]
    ? xList[2]
    : xList[0] === xList[2]
    ? xList[1]
    : xList[0];
const y =
  yList[0] === yList[1]
    ? yList[2]
    : yList[0] === yList[2]
    ? yList[1]
    : yList[0];

console.log(`${x} ${y}`);
