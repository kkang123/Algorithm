let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);

for (i = 1; i < T + 1; i++) {
  let arr = input[i].split(" ").map(Number);

  let sum = arr[0] + arr[1];
  console.log(sum);
}
