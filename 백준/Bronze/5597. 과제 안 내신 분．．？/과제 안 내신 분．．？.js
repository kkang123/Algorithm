const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    res.push(i);
  }
}

res.sort((a, b) => a - b);
console.log(res.join("\n"));
