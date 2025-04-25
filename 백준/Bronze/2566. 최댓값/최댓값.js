const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let max = 0;
let maxRow = 0;
let maxCol = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] >= max) {
      max = input[i][j];
      maxRow = i + 1;
      maxCol = j + 1;
    }
  }
}

console.log(`${max}\n${maxRow} ${maxCol}`);
