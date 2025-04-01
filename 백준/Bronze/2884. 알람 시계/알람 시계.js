let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let a = input[0];
let b = input[1];

b -= 45;

if (b < 0) {
  b += 60;
  a -= 1;
}

if (a < 0) {
  a = 23;
}

console.log(a, b);
