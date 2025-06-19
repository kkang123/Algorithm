const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());

const students = input.map((line) => line.split(" ").map(Number));

let count = Array.from({ length: n }).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j) {
      continue;
    }

    for (let k = 0; k < 5; k++) {
      if (students[i][k] === students[j][k]) {
        count[i]++;
        break;
      }
    }
  }
}

const max = Math.max(...count);
const res = count.indexOf(max) + 1;

console.log(res);
