const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [a1, a0] = input[0].split(" ").map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

const fn0 = a1 * n0 + a0;

if (fn0 <= c * n0 && a1 <= c) {
  console.log(1);
} else {
  console.log(0);
}
