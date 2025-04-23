const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const table = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
};

const inputdata = input.map((x) => x.split(" "));
let s = 0;
let t = 0;
for (let [a, b, c] of inputdata) {
  if (c === "P") continue;
  t += b * table[c];
  s += +b;
}
console.log((t / s).toFixed(6));
