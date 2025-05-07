const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (let [a, b, c] of input) {
  if (a === 0 && b === 0 && c === 0) break;

  let max = Math.max(a, b, c);
  let sum = a + b + c;

  if (sum - max <= max) {
    console.log("Invalid");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || c === a) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
