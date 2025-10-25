const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let zero = 0;
let one = 0;

if (input[0] === "0") zero++;
else one++;

for (let i = 1; i < input.length; i++) {
  if (input[i] !== input[i - 1]) {
    if (input[i] === "0") zero++;
    else one++;
  }
}

console.log(Math.min(zero, one));
