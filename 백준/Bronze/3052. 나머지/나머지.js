const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = new Set();

for (let i = 0; i < input.length; i++) {
  arr.add(input[i] % 42);
}

console.log(arr.size);
