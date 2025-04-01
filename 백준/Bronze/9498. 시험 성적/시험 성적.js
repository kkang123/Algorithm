let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let res = parseInt(input);

console.log(
  res >= 90
    ? "A"
    : res >= 80
    ? "B"
    : res >= 70
    ? "C"
    : res >= 60
    ? "D"
    : "F"
);
