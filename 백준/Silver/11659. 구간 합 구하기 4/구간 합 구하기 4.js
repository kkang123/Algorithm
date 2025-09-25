const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);


const prefixSum = numbers.reduce(
  (acc, cur) => {
    acc.push(acc[acc.length - 1] + cur);
    return acc;
  },
  [0]
);

const result = input.slice(2).map(line => {
  const [i, j] = line.split(" ").map(Number);
  return prefixSum[j] - prefixSum[i - 1];
});

console.log(result.join("\n"));
