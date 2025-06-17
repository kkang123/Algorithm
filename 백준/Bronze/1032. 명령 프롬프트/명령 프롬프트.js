const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

const first = input[0].split("");
const len = first.length;

for (let i = 1; i < T; i++) {
  for (let j = 0; j < len; j++) {
    if (input[i][j] !== first[j]) {
      first[j] = "?";
    }
  }
}

console.log(first.join(""));
