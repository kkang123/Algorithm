const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    count += 1;
  }
}

console.log(count);