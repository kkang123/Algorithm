const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

let count = 0;

let sum = input.reduce((acc, cur) => acc + cur, 0);

while (sum >= 10) {
  sum = sum
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  count++;
}

if (input.length > 1) count++;

console.log(count);
console.log(sum % 3 === 0 ? "YES" : "NO");
