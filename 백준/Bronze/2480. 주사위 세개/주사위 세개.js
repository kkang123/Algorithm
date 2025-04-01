let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort();

let one = input[0];
let two = input[1];
let three = input[2];

if (one == two && two == three) {
  console.log(10000 + one * 1000);
} else if (one === two || two === three) {
  if (one === two) {
    console.log(1000 + two * 100);
  } else if (two === three) {
    console.log(1000 + three * 100);
  }
} else {
  console.log(three * 100);
}

// sort를 사용 안하면 더 길어질 듯 Math.max(a, b, c)를 쓰거나
