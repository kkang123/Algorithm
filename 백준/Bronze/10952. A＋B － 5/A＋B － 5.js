let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = "";

for (let i = 0; i < input.length - 1; i++) {
  let data = input[i].split(" ").map(Number);
  sum += data[0] + data[1] + "\n";
}

console.log(sum);
