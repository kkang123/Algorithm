let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [len, max] = input[0].split(" ").map(Number);

let numbers = input[1].split(" ").map(Number);

let res = [];

for (let i = 0; i < len; i++) {
  if (numbers[i] < max) {
    res.push(numbers[i]);
  }
}

console.log(res.join(" "));
