const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.trim().split(""));

let minPaint = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let wStartBoard = 0;
    let bStartBoard = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const current = board[i + x][j + y];
        const shouldBeWhite = (x + y) % 2 === 0 ? "W" : "B";
        const shouldBeBlack = (x + y) % 2 === 0 ? "B" : "W";

        if (current !== shouldBeWhite) wStartBoard++;
        if (current !== shouldBeBlack) bStartBoard++;
      }
    }

    minPaint = Math.min(minPaint, wStartBoard, bStartBoard);
  }
}

console.log(minPaint);


// 문제 이해부터 다시 차근차근 해볼 것