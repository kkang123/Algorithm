let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let T = Number(input);
let sum = 0;

for (i = 0; i < T + 1; i++) {
  sum += i;
}

console.log(sum);
