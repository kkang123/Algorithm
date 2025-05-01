const [A, B, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let remainder = A % B;

for (let i = 1; i <= N; i++) {
  remainder *= 10;
  const digit = Math.floor(remainder / B);
  remainder = remainder % B;

  if (i === N) {
    console.log(digit);
  }
}
