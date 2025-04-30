
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

let arr = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; i < T; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let a = x; a < x + 10; a++) {
    for (let b = y; b < y + 10; b++) {
      arr[a][b] = 1;
    }
  }
}

let area = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (arr[i][j] !== 0) {
      area++;
    }
  }
}

console.log(area);
