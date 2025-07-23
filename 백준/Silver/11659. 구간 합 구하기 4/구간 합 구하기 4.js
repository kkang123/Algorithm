const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

const prefixSum = [0];
for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + arr[i];
}

const res = [];
for (let a = 0; a < M; a++) {
  const [i, j] = input[a].split(" ").map(Number);
  res.push(prefixSum[j] - prefixSum[i - 1]);
}
console.log(res.join("\n"));
