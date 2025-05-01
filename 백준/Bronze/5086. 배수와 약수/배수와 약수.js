const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  if (A === 0 && B === 0) break;

  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
