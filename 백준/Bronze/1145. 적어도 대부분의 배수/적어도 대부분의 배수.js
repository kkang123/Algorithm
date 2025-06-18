
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let num = 1;

while (true) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (num % input[i] === 0) {
      count++;
    }
  }

  if (count >= 3) {
    console.log(num);
    break;
  }

  num++;
}
