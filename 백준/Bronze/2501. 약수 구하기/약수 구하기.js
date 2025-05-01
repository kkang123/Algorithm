const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

res = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    res.push(i);
  }
}

res.sort((a, b) => a - b);

console.log(res.length >= K ? res[K - 1] : 0);
