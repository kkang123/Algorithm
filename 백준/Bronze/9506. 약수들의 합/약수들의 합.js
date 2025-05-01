const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  const n = input[i];
  let sum = 0;
  let arr = [];

  for (let j = 1; j < n; j++) {
    if (n % j === 0) {
      sum += j;
      arr.push(j);
    }
  }

  if (n === -1) break;

  if (sum === n) {
    console.log(`${n} = ${arr.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}
