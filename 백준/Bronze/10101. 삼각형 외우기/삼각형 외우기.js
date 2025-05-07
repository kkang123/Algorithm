const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur);

if (sum !== 180) {
  console.log("Error");
} else if (input[0] === input[1] && input[1] === input[2]) {
  console.log("Equilateral");
} else if (
  input[0] === input[1] ||
  input[1] === input[2] ||
  input[2] === input[0]
) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
