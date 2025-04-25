const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const X = Number(input);

let stick = [64];
let sum = 64;

while (sum > X) {
  const current = stick.pop() / 2;

  const tempSum = stick.reduce((pre, cur) => pre + cur, 0);

  if (current + tempSum >= X) {
    stick.push(current);
  } else {
    stick.push(current);
    stick.push(current);
  }

  sum = stick.reduce((pre, cur) => pre + cur, 0);
}

console.log(stick.length);
