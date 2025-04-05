const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const T = Number(input);

let res = [];

for (let i = 1; i <= T; i++) {
  const space = " ".repeat(T - i);
  const starts = "*".repeat(2 * i - 1);
  console.log(space + starts);
}

for (let i = T - 1; i > 0; i--) {
  const space = " ".repeat(T - i);
  const starts = "*".repeat(2 * i - 1);
  console.log(space + starts);
}
