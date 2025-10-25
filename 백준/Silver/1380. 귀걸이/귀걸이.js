const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let idx = 0;
let scenario = 1;

while (true) {
  const n = Number(input[idx++]);
  if (n === 0) break;

  const names = [];
  for (let i = 0; i < n; i++) names.push(input[idx++]);

  const counts = Array(n).fill(0);
  for (let i = 0; i < 2 * n - 1; i++) {
    const [num] = input[idx++].split(" ");
    counts[Number(num) - 1]++;
  }

  const missingIndex = counts.findIndex((c) => c === 1);
  console.log(`${scenario} ${names[missingIndex]}`);
  scenario++;
}
