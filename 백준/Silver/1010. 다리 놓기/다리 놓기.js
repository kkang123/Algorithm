
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

function combination(r, n) {
  r = BigInt(r);
  n = BigInt(n);
  return factorial(n) / (factorial(r) * factorial(n - r));
}

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(combination(a, b).toString());
}
