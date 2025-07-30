const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const castle = input.slice(0);

let needRow = 0;
for (let i = 0; i < N; i++) {
  if (!castle[i].includes("X")) {
    needRow++;
  }
}

let needCol = 0;
for (let j = 0; j < M; j++) {
  let hasGuard = false;
  for (let i = 0; i < N; i++) {
    if (castle[i][j] === "X") {
      hasGuard = true;
      break;
    }
  }
  if (!hasGuard) {
    needCol++;
  }
}

console.log(Math.max(needRow, needCol));
