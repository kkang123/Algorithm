const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let res = "";
const [a, b, c, d, e, f] = input;

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      res = `${x} ${y}`;
      break;
    }
  }
  if (res) break;
}

console.log(res);