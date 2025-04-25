const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);

const arr = input.map((el) => el.split("").map(Number));

let res = 0;

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      count = 0;
    } else {
      count++;
    }

    if (count >= K) {
      res++;
    }
  }
}

console.log(res);
