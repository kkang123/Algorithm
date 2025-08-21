const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const N = input.shift();
let dasom = input[0];
let others = input.slice(1); 
let count = 0;

if (N === 1) {
  console.log(0);
  process.exit(0);
}

while (true) {
  let maxVote = Math.max(...others);

  if (dasom > maxVote) break;

  let idx = others.indexOf(maxVote);

  others[idx]--;
  dasom++;
  count++;
}

console.log(count);
