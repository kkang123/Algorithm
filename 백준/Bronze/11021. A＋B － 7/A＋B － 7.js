let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);
let sum = "";

for (let i = 1; i < T + 1; i++) {
  let arr = input[i].split(" ").map(Number);
  sum += `Case #${i}: ` + (arr[0] + arr[1]) + "\n";
}

console.log(sum);
