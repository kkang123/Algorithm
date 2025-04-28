const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let res = [];
const len = Math.max(...input.map((line) => line.length));

for (let i = 0; i < len; i++) {
  for (let j = 0; j < input.length; j++) {
    res.push(input[j][i]);
  }
}

console.log(res.join(""));
