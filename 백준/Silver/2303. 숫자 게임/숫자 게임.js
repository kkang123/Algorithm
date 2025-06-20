const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

let scores = Array(T).fill(0);

for (let i = 0; i < T; i++) {
  let num = input[i].split(" ").map(Number);
  for (let a = 0; a < 5; a++) {
    for (let b = a + 1; b < 5; b++) {
      for (let c = b + 1; c < 5; c++) {
        let sum = num[a] + num[b] + num[c];
        let lastNum = sum % 10;
        scores[i] = Math.max(scores[i], lastNum);
      }
    }
  }
}

const max = Math.max(...scores);

for (let i = T - 1; i >= 0; i--) {
  if (scores[i] === max) {
    console.log(i + 1);
    break;
  }
}
