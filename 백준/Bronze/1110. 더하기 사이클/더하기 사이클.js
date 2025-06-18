let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const original = input;
let count = 0;

while (true) {
  let sum = Math.floor(input / 10) + (input % 10);
  input = (input % 10) * 10 + (sum % 10);
  count++;
  if (input === original) break;
}

console.log(count);
