const input = Number(require("fs").readFileSync("/dev/stdin").toString());

let count = 0;
let n = input;

while (n >= 0) {
  if (n % 5 === 0) {
    count += n / 5;
    console.log(count);
    break;
  }
  n -= 3;
  count++;
}

if (n < 0) {
  console.log(-1);
}
