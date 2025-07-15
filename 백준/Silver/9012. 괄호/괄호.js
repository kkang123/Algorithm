const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let cum = 0;

  for (let par of input[i]) {
    cum += par === "(" ? 1 : -1;

    if (cum < 0) {
      console.log("NO");
      break;
    }
  }

  if (cum >= 0) {
    console.log(cum === 0 ? "YES" : "NO");
  }
}
