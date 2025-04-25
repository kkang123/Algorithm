const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let count = 0;
let day = 0;

let changed = true;

while (changed) {
  changed = false;

  for (let i = K; i < N; i++) {
    if (arr[i] > arr[i - K]) {
      let diff = arr[i] - arr[i - K];
      count += diff;
      arr[i] = arr[i - K];
      day++;

      changed = true;
      break;
    }
  }
  arr.sort((a, b) => a - b);
}

console.log(count, day);
