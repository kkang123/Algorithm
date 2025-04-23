const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function combination(n, r) {
  if (r > n) [r, n] = [n, r]; 

  let result = 1;
  for (let i = 1; i <= r; i++) {
    result *= n - i + 1;
    result /= i;
  }

  return Math.round(result);
}

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(combination(a, b));
}
