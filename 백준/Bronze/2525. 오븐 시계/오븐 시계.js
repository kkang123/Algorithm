let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let time = input[0].split(" ").map(Number);

let h = time[0];
let m = time[1];
let z = Number(input[1]);

m += z;

while (m >= 60) {
  m -= 60;
  h += 1;
}

if (h > 23) {
  h %= 24;
}

console.log(h, m);
